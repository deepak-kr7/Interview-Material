/* ==========================================================================
   STATE & INITIALIZATION
   ========================================================================== */
let questions = [];
let userProgress = {}; // { qId: 'unopened' | 'learning' | 'mastered' }
let streak = 0;
let lastActiveDate = null;
let currentView = 'browse';
let categories = [];

// Filters State
const filters = {
    search: '',
    category: 'all',
    difficulty: 'all',
    status: 'all',
    sortBy: 'default'
};

// Active Sessions
let flashcardSession = {
    list: [],
    currentIndex: 0
};

let mockSession = {
    list: [],
    currentIndex: 0,
    userAnswers: {} // { qIndex: [selected_option_indices] }
};

// Helper function to get 12-hour stable shuffled questions
function get12HourShuffledQuestions() {
    const now = Date.now();
    const savedTime = localStorage.getItem('devops_hub_shuffle_time');
    const savedOrder = localStorage.getItem('devops_hub_shuffle_order');
    
    // 12 hours in milliseconds = 12 * 60 * 60 * 1000 = 43200000
    const twelveHours = 43200000;
    
    if (savedTime && savedOrder && (now - parseInt(savedTime, 10) < twelveHours)) {
        try {
            const orderIds = JSON.parse(savedOrder);
            const idMap = new Map(qaData.map(q => [q.id, q]));
            
            // Reconstruct the array based on the saved order of IDs
            const orderedQuestions = orderIds
                .map(id => idMap.get(id))
                .filter(q => q !== undefined); // filter out any deleted/undefined ones
            
            // If there are new questions added that weren't in the saved order, append them at the end
            const currentIds = new Set(orderIds);
            const newQuestions = qaData.filter(q => !currentIds.has(q.id));
            
            return [...orderedQuestions, ...newQuestions];
        } catch (e) {
            console.error("Error parsing saved shuffle order, re-shuffling", e);
        }
    }
    
    // Create a new shuffle if no cache exists or it has expired (12+ hours)
    const shuffled = [...qaData].sort(() => Math.random() - 0.5);
    const orderIds = shuffled.map(q => q.id);
    
    localStorage.setItem('devops_hub_shuffle_time', now.toString());
    localStorage.setItem('devops_hub_shuffle_order', JSON.stringify(orderIds));
    
    return shuffled;
}

// Initialize the Application
document.addEventListener('DOMContentLoaded', () => {
    // Load data from data.js (global qaData) and apply 12-hour stable shuffle
    if (typeof qaData !== 'undefined') {
        questions = get12HourShuffledQuestions();
        categories = [...new Set(qaData.map(q => q.category))];
    } else {
        console.error("qaData is not defined. Check data.js path.");
        return;
    }

    // Load progress from LocalStorage
    loadProgress();
    
    // Initialize Streak
    initStreak();

    // Setup UI Components
    setupTheme();
    renderCategoryPills();
    setupEventListeners();
    
    // Initial Render
    filterAndRenderQuestions();
    updateProgressWidgets();
    initUserProfileAndEngagement(); // Initialize new profile and comments logic
});

/* ==========================================================================
   LOCAL STORAGE & PROGRESS TRACKING
   ========================================================================== */
function loadProgress() {
    const savedProgress = localStorage.getItem('devops_hub_progress');
    if (savedProgress) {
        userProgress = JSON.parse(savedProgress);
    } else {
        // Initialize all questions as unopened
        questions.forEach(q => {
            userProgress[q.id] = 'unopened';
        });
        saveProgress();
    }
}

function saveProgress() {
    localStorage.setItem('devops_hub_progress', JSON.stringify(userProgress));
    updateProgressWidgets();
}

function updateQuestionStatus(id, status) {
    userProgress[id] = status;
    saveProgress();
    
    // Update active card border/status in the grid if it exists
    const card = document.querySelector(`.q-card[data-id="${id}"]`);
    if (card) {
        card.classList.remove('status-learning', 'status-mastered');
        if (status === 'learning') card.classList.add('status-learning');
        if (status === 'mastered') card.classList.add('status-mastered');
        
        // Update action buttons inside the card
        const learnBtn = card.querySelector('.btn-mark-learning');
        const masterBtn = card.querySelector('.btn-mark-mastered');
        if (learnBtn && masterBtn) {
            learnBtn.className = `card-action-btn btn-mark-learning ${status === 'learning' ? 'active-learning' : ''}`;
            learnBtn.innerHTML = status === 'learning' ? '<i class="fa-solid fa-bookmark"></i>' : '<i class="fa-regular fa-bookmark"></i>';
            
            masterBtn.className = `card-action-btn btn-mark-mastered ${status === 'mastered' ? 'active-mastered' : ''}`;
            masterBtn.innerHTML = status === 'mastered' ? '<i class="fa-solid fa-circle-check"></i>' : '<i class="fa-regular fa-circle-check"></i>';
        }
    }
}

function initStreak() {
    const savedStreak = localStorage.getItem('devops_hub_streak');
    const savedLastDate = localStorage.getItem('devops_hub_last_date');
    
    const todayStr = new Date().toDateString();
    
    if (savedStreak) {
        streak = parseInt(savedStreak, 10);
    }
    if (savedLastDate) {
        lastActiveDate = savedLastDate;
    }
    
    if (lastActiveDate) {
        const lastDate = new Date(lastActiveDate);
        const today = new Date(todayStr);
        const diffTime = Math.abs(today - lastDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) {
            // Consecutive day, streak continues when they perform an action
        } else if (diffDays > 1) {
            // Streak broken
            streak = 0;
            localStorage.setItem('devops_hub_streak', streak);
        }
    }
    
    updateStreakDisplay();
}

function recordActivity() {
    const todayStr = new Date().toDateString();
    if (lastActiveDate !== todayStr) {
        if (lastActiveDate) {
            const lastDate = new Date(lastActiveDate);
            const today = new Date(todayStr);
            const diffTime = Math.abs(today - lastDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            
            if (diffDays === 1) {
                streak += 1;
            } else if (diffDays > 1) {
                streak = 1;
            }
        } else {
            streak = 1;
        }
        
        lastActiveDate = todayStr;
        localStorage.setItem('devops_hub_streak', streak);
        localStorage.setItem('devops_hub_last_date', lastActiveDate);
        updateStreakDisplay();
    }
}

function updateStreakDisplay() {
    const streakEl = document.getElementById('streak-counter');
    if (streakEl) {
        streakEl.innerHTML = `<i class="fa-solid fa-fire"></i> ${streak} Day${streak !== 1 ? 's' : ''} Streak`;
    }
}

function updateProgressWidgets() {
    const total = questions.length;
    if (total === 0) return;
    
    const mastered = Object.values(userProgress).filter(s => s === 'mastered').length;
    const learning = Object.values(userProgress).filter(s => s === 'learning').length;
    const unopened = total - mastered - learning;
    
    const pct = Math.round((mastered / total) * 100);
    
    // Sidebar Widget
    const widgetPct = document.getElementById('widget-pct');
    const widgetFill = document.getElementById('widget-fill');
    const widgetCount = document.getElementById('widget-count');
    
    if (widgetPct) widgetPct.innerText = `${pct}%`;
    if (widgetFill) widgetFill.style.width = `${pct}%`;
    if (widgetCount) widgetCount.innerText = `${mastered} / ${total} Mastered`;
    
    // Progress Panel
    const radialText = document.getElementById('progress-radial-text');
    const radialRing = document.getElementById('progress-radial');
    const legendMastered = document.getElementById('legend-mastered');
    const legendLearning = document.getElementById('legend-learning');
    const legendUnopened = document.getElementById('legend-unopened');
    
    if (radialText) radialText.innerText = `${pct}%`;
    if (radialRing) radialRing.style.setProperty('--percent', pct);
    
    if (legendMastered) legendMastered.innerText = `${mastered} Mastered`;
    if (legendLearning) legendLearning.innerText = `${learning} Learning`;
    if (legendUnopened) legendUnopened.innerText = `${unopened} Unopened`;
    
    // Render Topic Progress Bars
    renderTopicProgressBars();
}

/* ==========================================================================
   THEME TOGGLING
   ========================================================================== */
function setupTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const savedTheme = localStorage.getItem('devops_hub_theme') || 'dark';
    
    if (savedTheme === 'light') {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i> <span>Light Mode</span>';
    } else {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i> <span>Dark Mode</span>';
    }
    
    themeToggleBtn.addEventListener('click', () => {
        if (document.body.classList.contains('dark-theme')) {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i> <span>Light Mode</span>';
            localStorage.setItem('devops_hub_theme', 'light');
        } else {
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
            themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i> <span>Dark Mode</span>';
            localStorage.setItem('devops_hub_theme', 'dark');
        }
    });
}

/* ==========================================================================
   TEXT TO HTML FORMATTING (MARKDOWN-LIKE)
   ========================================================================== */
function formatAnswerToHTML(text) {
    if (!text) return '';
    
    // Escape HTML first to prevent XSS
    let escaped = text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
        
    // Split by triple backticks for code blocks
    const parts = escaped.split(/```/g);
    let htmlResult = '';
    
    for (let i = 0; i < parts.length; i++) {
        if (i % 2 === 1) {
            // Inside a code block
            const block = parts[i];
            const lines = block.split('\n');
            let language = 'bash';
            let codeContent = block;
            
            if (lines.length > 0 && lines[0].trim().match(/^[a-zA-Z0-9_-]+$/)) {
                language = lines[0].trim();
                codeContent = lines.slice(1).join('\n');
            }
            
            htmlResult += `
                <pre><code class="language-${language}">${codeContent.trim()}</code><button class="code-copy-btn" title="Copy Code" onclick="copyCodeBlock(this)"><i class="fa-regular fa-copy"></i></button></pre>
            `;
        } else {
            // Normal text block
            let textBlock = parts[i];
            
            // Format inline code: `code`
            textBlock = textBlock.replace(/`([^`]+)`/g, '<code>$1</code>');
            
            // Format bold text: **text**
            textBlock = textBlock.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
            
            // Handle bullet points
            const lines = textBlock.split('\n');
            let inList = false;
            let formattedBlock = '';
            
            for (let j = 0; j < lines.length; j++) {
                let line = lines[j];
                
                // Bullet points: • or - or *
                const bulletMatch = line.match(/^\s*[•\-\*]\s+(.*)$/);
                // Numbered list: 1. or 2.
                const numMatch = line.match(/^\s*(\d+)\.\s+(.*)$/);
                
                if (bulletMatch) {
                    if (!inList) {
                        formattedBlock += '<ul>';
                        inList = 'ul';
                    }
                    formattedBlock += `<li>${bulletMatch[1]}</li>`;
                } else if (numMatch) {
                    if (!inList) {
                        formattedBlock += '<ol>';
                        inList = 'ol';
                    }
                    formattedBlock += `<li>${numMatch[2]}</li>`;
                } else {
                    if (inList) {
                        formattedBlock += inList === 'ul' ? '</ul>' : '</ol>';
                        inList = false;
                    }
                    
                    if (line.trim()) {
                        formattedBlock += `<p>${line}</p>`;
                    }
                }
            }
            
            if (inList) {
                formattedBlock += inList === 'ul' ? '</ul>' : '</ol>';
            }
            
            htmlResult += formattedBlock;
        }
    }
    
    return htmlResult;
}

// Global copy function for code blocks
window.copyCodeBlock = function(btn) {
    const pre = btn.parentElement;
    const code = pre.querySelector('code');
    if (code) {
        navigator.clipboard.writeText(code.innerText).then(() => {
            const icon = btn.querySelector('i');
            icon.className = 'fa-solid fa-check';
            btn.style.color = '#34d399';
            setTimeout(() => {
                icon.className = 'fa-regular fa-copy';
                btn.style.color = '';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    }
};

/* ==========================================================================
   NAVIGATION & VIEW SWITCHING
   ========================================================================== */
function setupEventListeners() {
    // Logo Click to go Home
    const logoLink = document.getElementById('logo-link');
    if (logoLink) {
        logoLink.addEventListener('click', () => {
            switchView('browse');
            document.querySelectorAll('.menu-item').forEach(mi => mi.classList.remove('active'));
            const browseMenu = document.querySelector('.menu-item[data-view="browse"]');
            if (browseMenu) browseMenu.classList.add('active');
            resetAllFilters();
        });
    }

    // View switching
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetView = item.getAttribute('data-view');
            switchView(targetView);
            
            // Update active menu item
            menuItems.forEach(mi => mi.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Search and Filters
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', (e) => {
        filters.search = e.target.value;
        filterAndRenderQuestions();
    });

    const difficultyButtons = document.querySelectorAll('.difficulty-filters .diff-btn');
    difficultyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            difficultyButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filters.difficulty = btn.getAttribute('data-diff');
            filterAndRenderQuestions();
        });
    });

    const statusButtons = document.querySelectorAll('.status-filters .status-btn');
    statusButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            statusButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filters.status = btn.getAttribute('data-status');
            filterAndRenderQuestions();
        });
    });

    const sortSelect = document.getElementById('sort-select');
    sortSelect.addEventListener('change', (e) => {
        filters.sortBy = e.target.value;
        filterAndRenderQuestions();
    });

    const resetFiltersBtn = document.getElementById('reset-filters');
    resetFiltersBtn.addEventListener('click', () => {
        resetAllFilters();
    });

    // Modal close
    const closeModalBtn = document.getElementById('close-modal-btn');
    const modalCloseFooterBtn = document.getElementById('modal-btn-close');
    const backdrop = document.getElementById('modal-backdrop');
    
    [closeModalBtn, modalCloseFooterBtn, backdrop].forEach(el => {
        if (el) {
            el.addEventListener('click', hideQuestionModal);
        }
    });

    // Flashcards Setup & Session Controls
    document.getElementById('start-flashcards-btn').addEventListener('click', startFlashcards);
    document.getElementById('close-flashcards').addEventListener('click', exitFlashcardSession);
    document.getElementById('flashcard-card').addEventListener('click', flipFlashcard);
    
    document.getElementById('flash-prev-btn').addEventListener('click', () => navigateFlashcard(-1));
    document.getElementById('flash-next-btn').addEventListener('click', () => navigateFlashcard(1));
    
    document.getElementById('flash-still-learning-btn').addEventListener('click', () => markFlashcardStatus('learning'));
    document.getElementById('flash-mastered-btn').addEventListener('click', () => markFlashcardStatus('mastered'));

    // Mock Interview Controls
    document.getElementById('start-mock-btn').addEventListener('click', startMockInterview);
    document.getElementById('end-mock-early-btn').addEventListener('click', () => {
        if (confirm("Are you sure you want to quit the exam? Your progress will not be saved.")) {
            switchView('mock');
            document.getElementById('mock-setup').style.display = 'block';
            document.getElementById('mock-active').style.display = 'none';
            document.getElementById('mock-results').style.display = 'none';
        }
    });
    
    document.getElementById('mock-prev-btn').addEventListener('click', () => navigateMock(-1));
    document.getElementById('mock-next-btn').addEventListener('click', () => navigateMock(1));
    document.getElementById('mock-submit-btn').addEventListener('click', finishMockInterview);

    document.getElementById('mock-restart-btn').addEventListener('click', () => {
        switchView('mock');
        document.getElementById('mock-setup').style.display = 'block';
        document.getElementById('mock-active').style.display = 'none';
        document.getElementById('mock-results').style.display = 'none';
    });
    document.getElementById('mock-view-browse-btn').addEventListener('click', () => {
        switchView('browse');
        const browseMenu = document.querySelector('.menu-item[data-view="browse"]');
        if (browseMenu) {
            document.querySelectorAll('.menu-item').forEach(mi => mi.classList.remove('active'));
            browseMenu.classList.add('active');
        }
    });

    // Self-evaluation buttons in Mock
    const evalButtons = document.querySelectorAll('.btn-eval');
    evalButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const score = parseInt(btn.getAttribute('data-score'), 10);
            submitMockScore(score);
        });
    });

    // Progress Panel Actions
    document.getElementById('action-reset-all').addEventListener('click', () => {
        if (confirm("Are you sure you want to RESET all preparation progress? This will clear all mastered questions, bookmarks, and streaks. This cannot be undone.")) {
            resetAllProgress();
        }
    });
    document.getElementById('action-study-weak').addEventListener('click', studyWeakTopics);
}

function switchView(viewName) {
    currentView = viewName;
    
    // Hide all panels
    const panels = document.querySelectorAll('.content-panel');
    panels.forEach(panel => {
        panel.style.display = 'none';
    });
    
    // Show target panel
    const activePanel = document.getElementById(`view-${viewName}`);
    if (activePanel) {
        activePanel.style.display = 'block';
        
        // Custom transitions or loaders per view
        if (viewName === 'progress') {
            updateProgressWidgets();
        } else if (viewName === 'flashcards' && !flashcardSession.active) {
            setupFlashcardSelection();
        } else if (viewName === 'mock' && !mockSession.active) {
            setupMockSelection();
        }
    }
}

/* ==========================================================================
   EXPLORER VIEW: RENDER & FILTER
   ========================================================================== */
function renderCategoryPills() {
    const container = document.getElementById('category-pills-container');
    if (!container) return;
    
    // Keep the "All" pill
    container.innerHTML = `<button class="category-pill active" data-category="all">All Topics</button>`;
    
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'category-pill';
        btn.setAttribute('data-category', cat);
        btn.innerText = cat;
        
        btn.addEventListener('click', () => {
            document.querySelectorAll('.category-pill').forEach(pill => pill.classList.remove('active'));
            btn.classList.add('active');
            filters.category = cat;
            filterAndRenderQuestions();
        });
        
        container.appendChild(btn);
    });
}

function resetAllFilters() {
    filters.search = '';
    filters.category = 'all';
    filters.difficulty = 'all';
    filters.status = 'all';
    filters.sortBy = 'default';
    
    // Reset DOM inputs
    document.getElementById('search-input').value = '';
    document.getElementById('sort-select').value = 'default';
    
    document.querySelectorAll('.category-pill').forEach(p => {
        p.classList.toggle('active', p.getAttribute('data-category') === 'all');
    });
    document.querySelectorAll('.diff-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-diff') === 'all');
    });
    document.querySelectorAll('.status-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-status') === 'all');
    });
    
    filterAndRenderQuestions();
}

function filterAndRenderQuestions() {
    let filtered = [...questions];
    
    // 1. Search Filter (Strict Question & Category Matching with Smart Aliases)
    if (filters.search.trim() !== '') {
        const query = filters.search.toLowerCase().trim();
        
        // Define smart keyword groups
        let searchTerms = [query];
        
        // Kubernetes / AKS / K8s
        if (['aks', 'k8s', 'kubernetes', 'kube'].some(term => query.includes(term))) {
            searchTerms.push('kubernetes', 'aks', 'k8s', 'kube', 'pod', 'cluster');
        }
        // Terraform / IaC / TF
        else if (['terraform', 'tf', 'iac'].some(term => query.includes(term))) {
            searchTerms.push('terraform', 'tf', 'iac', 'infrastructure as code');
        }
        // CI/CD / Pipelines
        else if (['cicd', 'ci/cd', 'pipeline', 'pipelines', 'build', 'deploy'].some(term => query.includes(term))) {
            searchTerms.push('pipeline', 'pipelines', 'cicd', 'ci/cd', 'build', 'deploy', 'deployment');
        }
        // Docker / Container
        else if (['docker', 'container', 'image', 'dockerfile'].some(term => query.includes(term))) {
            searchTerms.push('docker', 'container', 'image', 'dockerfile');
        }
        // Linux / Bash
        else if (['linux', 'bash', 'shell', 'command', 'commands'].some(term => query.includes(term))) {
            searchTerms.push('linux', 'bash', 'shell', 'command', 'commands');
        }
        // Git / GitHub
        else if (['git', 'github', 'gitlab', 'repo', 'branch', 'commit'].some(term => query.includes(term))) {
            searchTerms.push('git', 'github', 'gitlab', 'repo', 'branch', 'commit', 'version control');
        }
        
        filtered = filtered.filter(q => {
            const qText = q.question.toLowerCase();
            const catText = q.category.toLowerCase();
            
            // Match search terms against question text or category name only (not the long answer body)
            return searchTerms.some(term => qText.includes(term) || catText.includes(term));
        });
    }
    
    // 2. Category Filter
    if (filters.category !== 'all') {
        filtered = filtered.filter(q => q.category === filters.category);
    }
    
    // 3. Difficulty Filter
    if (filters.difficulty !== 'all') {
        filtered = filtered.filter(q => q.difficulty === filters.difficulty);
    }
    
    // 4. Status Filter
    if (filters.status !== 'all') {
        filtered = filtered.filter(q => userProgress[q.id] === filters.status);
    }
    
    // 5. Sorting
    if (filters.sortBy === 'alphabetical') {
        filtered.sort((a, b) => a.question.localeCompare(b.question));
    } else if (filters.sortBy === 'difficulty-asc') {
        const diffWeight = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
        filtered.sort((a, b) => diffWeight[a.difficulty] - diffWeight[b.difficulty]);
    } else if (filters.sortBy === 'difficulty-desc') {
        const diffWeight = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
        filtered.sort((a, b) => diffWeight[b.difficulty] - diffWeight[a.difficulty]);
    }
    
    // Update Meta Counters
    document.getElementById('total-questions-count').innerText = questions.length;
    document.getElementById('results-count').innerText = `Showing ${filtered.length} questions`;
    
    // Render Questions Grid
    const grid = document.getElementById('questions-grid');
    const noResults = document.getElementById('no-results');
    
    if (filtered.length === 0) {
        grid.style.display = 'none';
        noResults.style.display = 'block';
    } else {
        grid.style.display = 'grid';
        noResults.style.display = 'none';
        
        grid.innerHTML = '';
        filtered.forEach(q => {
            const card = createQuestionCard(q);
            grid.appendChild(card);
        });
    }
}

function createQuestionCard(q) {
    const card = document.createElement('div');
    const status = userProgress[q.id] || 'unopened';
    
    card.className = `q-card status-${status}`;
    card.setAttribute('data-id', q.id);
    
    // Category specific icon
    let iconClass = 'fa-solid fa-code';
    if (q.category.includes('Terraform')) iconClass = 'fa-solid fa-cubes';
    else if (q.category.includes('Kubernetes')) iconClass = 'fa-solid fa-dharmachakra';
    else if (q.category.includes('Azure')) iconClass = 'fa-solid fa-cloud';
    else if (q.category.includes('Linux')) iconClass = 'fa-brands fa-linux';
    else if (q.category.includes('Behavioral')) iconClass = 'fa-solid fa-user-tie';
    
    card.innerHTML = `
        <div class="card-top">
            <div class="card-badges">
                <span class="badge badge-info"><i class="${iconClass}"></i> ${q.category}</span>
                <span class="difficulty-indicator diff-${q.difficulty.toLowerCase()}">
                    <span class="difficulty-dot"></span>
                    <span class="difficulty-text">${q.difficulty}</span>
                </span>
            </div>
            <div class="card-actions-row" onclick="event.stopPropagation();">
                <button class="card-action-btn btn-mark-learning ${status === 'learning' ? 'active-learning' : ''}" title="Mark as Learning">
                    ${status === 'learning' ? '<i class="fa-solid fa-bookmark"></i>' : '<i class="fa-regular fa-bookmark"></i>'}
                </button>
                <button class="card-action-btn btn-mark-mastered ${status === 'mastered' ? 'active-mastered' : ''}" title="Mark as Mastered">
                    ${status === 'mastered' ? '<i class="fa-solid fa-circle-check"></i>' : '<i class="fa-regular fa-circle-check"></i>'}
                </button>
            </div>
        </div>
        <h3>${q.question}</h3>
        <div class="card-meta-bottom">
            <span>Source: ${q.source}</span>
            <span class="expand-text"><i class="fa-solid fa-chevron-down"></i> Click to view answer</span>
        </div>
        <div class="card-answer-wrapper">
            <div class="card-answer-container">
                <hr class="card-answer-divider">
                <div class="answer-header">Recommended Answer</div>
                <div class="markdown-content">${formatAnswerToHTML(q.answer)}</div>
            </div>
        </div>
    `;
    
    // Toggle expand on card click
    card.addEventListener('click', (e) => {
        // Prevent click if copying code or clicking inside links
        if (e.target.closest('.code-copy-btn') || e.target.closest('pre') || e.target.closest('code') || e.target.closest('a')) {
            return;
        }
        
        const isExpanded = card.classList.contains('expanded');
        
        // Collapse all other cards (optional, but clean)
        // document.querySelectorAll('.q-card.expanded').forEach(c => {
        //     if (c !== card) {
        //         c.classList.remove('expanded');
        //         c.querySelector('.expand-text').innerHTML = '<i class="fa-solid fa-chevron-down"></i> Click to view answer';
        //     }
        // });
        
        card.classList.toggle('expanded');
        const expandText = card.querySelector('.expand-text');
        
        if (isExpanded) {
            expandText.innerHTML = '<i class="fa-solid fa-chevron-down"></i> Click to view answer';
        } else {
            expandText.innerHTML = '<i class="fa-solid fa-chevron-up"></i> Hide answer';
            // Record activity for streak
            recordActivity();
            if (userProgress[q.id] === 'unopened') {
                updateQuestionStatus(q.id, 'learning');
            }
        }
    });
    
    // Mark status action buttons
    card.querySelector('.btn-mark-learning').addEventListener('click', () => {
        const nextStatus = userProgress[q.id] === 'learning' ? 'unopened' : 'learning';
        updateQuestionStatus(q.id, nextStatus);
        recordActivity();
    });
    
    card.querySelector('.btn-mark-mastered').addEventListener('click', () => {
        const nextStatus = userProgress[q.id] === 'mastered' ? 'unopened' : 'mastered';
        updateQuestionStatus(q.id, nextStatus);
        recordActivity();
    });
    
    return card;
}

/* ==========================================================================
   ACTIVE RECALL FLASHCARDS
   ========================================================================== */
function setupFlashcardSelection() {
    const grid = document.getElementById('flashcard-category-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    // Render "All Categories" Option
    const allCard = document.createElement('div');
    allCard.className = 'category-select-card selected';
    allCard.setAttribute('data-category', 'all');
    allCard.innerHTML = `
        <i class="fa-solid fa-infinity"></i>
        <h4>All DevOps Topics</h4>
        <span class="badge badge-outline">${questions.length} cards</span>
    `;
    allCard.addEventListener('click', () => selectFlashcardCategory(allCard, 'all'));
    grid.appendChild(allCard);
    
    // Render Individual Categories
    categories.forEach(cat => {
        const count = questions.filter(q => q.category === cat).length;
        const card = document.createElement('div');
        card.className = 'category-select-card';
        card.setAttribute('data-category', cat);
        
        let iconClass = 'fa-solid fa-code';
        if (cat.includes('Terraform')) iconClass = 'fa-solid fa-cubes';
        else if (cat.includes('Kubernetes')) iconClass = 'fa-solid fa-dharmachakra';
        else if (cat.includes('Azure')) iconClass = 'fa-solid fa-cloud';
        else if (cat.includes('Linux')) iconClass = 'fa-brands fa-linux';
        else if (cat.includes('Behavioral')) iconClass = 'fa-solid fa-user-tie';
        
        card.innerHTML = `
            <i class="${iconClass}"></i>
            <h4>${cat}</h4>
            <span class="badge badge-outline">${count} cards</span>
        `;
        card.addEventListener('click', () => selectFlashcardCategory(card, cat));
        grid.appendChild(card);
    });
}

let selectedFlashcardCategory = 'all';

function selectFlashcardCategory(cardEl, category) {
    document.querySelectorAll('.category-select-card').forEach(c => c.classList.remove('selected'));
    cardEl.classList.add('selected');
    selectedFlashcardCategory = category;
}

function startFlashcards() {
    let list = [...questions];
    if (selectedFlashcardCategory !== 'all') {
        list = list.filter(q => q.category === selectedFlashcardCategory);
    }
    
    if (list.length === 0) {
        alert("No questions in this category!");
        return;
    }
    
    // Shuffle list
    list.sort(() => Math.random() - 0.5);
    
    flashcardSession.list = list;
    flashcardSession.currentIndex = 0;
    flashcardSession.active = true;
    
    document.getElementById('flashcard-setup').style.display = 'none';
    document.getElementById('flashcard-active-session').style.display = 'flex';
    
    showFlashcard();
    recordActivity();
}

function showFlashcard() {
    const q = flashcardSession.list[flashcardSession.currentIndex];
    
    const card = document.getElementById('flashcard-card');
    card.classList.remove('flipped');
    
    document.getElementById('flash-card-category').innerText = q.category;
    document.getElementById('flash-card-question').innerText = q.question;
    document.getElementById('flash-card-answer').innerHTML = formatAnswerToHTML(q.answer);
    
    document.getElementById('flashcard-progress-text').innerText = `Card ${flashcardSession.currentIndex + 1} of ${flashcardSession.list.length}`;
    
    const masteredCount = flashcardSession.list.filter(q => userProgress[q.id] === 'mastered').length;
    document.getElementById('flash-mastered-count').innerText = masteredCount;
}

function flipFlashcard() {
    const card = document.getElementById('flashcard-card');
    card.classList.toggle('flipped');
    
    // If flipped to back and status is unopened, mark as learning
    if (card.classList.contains('flipped')) {
        const q = flashcardSession.list[flashcardSession.currentIndex];
        if (userProgress[q.id] === 'unopened') {
            updateQuestionStatus(q.id, 'learning');
        }
    }
}

function navigateFlashcard(dir) {
    let nextIdx = flashcardSession.currentIndex + dir;
    if (nextIdx >= 0 && nextIdx < flashcardSession.list.length) {
        flashcardSession.currentIndex = nextIdx;
        showFlashcard();
    }
}

function markFlashcardStatus(status) {
    const q = flashcardSession.list[flashcardSession.currentIndex];
    updateQuestionStatus(q.id, status);
    
    // Move to next card after a small delay
    setTimeout(() => {
        if (flashcardSession.currentIndex < flashcardSession.list.length - 1) {
            flashcardSession.currentIndex += 1;
            showFlashcard();
        } else {
            alert("Congratulations! You've completed this flashcard deck!");
            exitFlashcardSession();
        }
    }, 300);
}

function exitFlashcardSession() {
    flashcardSession.active = false;
    document.getElementById('flashcard-setup').style.display = 'block';
    document.getElementById('flashcard-active-session').style.display = 'none';
    setupFlashcardSelection();
}

/* ==========================================================================
   MOCK INTERVIEW SIMULATOR
   ========================================================================== */
function setupMockSelection() {
    const grid = document.getElementById('mock-topics-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    categories.forEach(cat => {
        const label = document.createElement('label');
        label.className = 'checkbox-label';
        label.innerHTML = `
            <input type="checkbox" name="mock-topic" value="${cat}" checked>
            <span>${cat}</span>
        `;
        grid.appendChild(label);
    });
}

function startMockInterview() {
    if (typeof mcqData === 'undefined') {
        alert("MCQ data is not loaded!");
        return;
    }
    
    // Get the selected question count (5, 10, or 20)
    const countEl = document.querySelector('input[name="mock-count"]:checked');
    const mockCount = countEl ? parseInt(countEl.value, 10) : 10;
    
    // Shuffle the 30 MCQ questions and select the requested number of questions
    const shuffledMcqs = [...mcqData].sort(() => Math.random() - 0.5);
    mockSession.list = shuffledMcqs.slice(0, Math.min(mockCount, shuffledMcqs.length));
    
    mockSession.currentIndex = 0;
    mockSession.userAnswers = {};
    mockSession.active = true;
    
    document.getElementById('mock-setup').style.display = 'none';
    document.getElementById('mock-active').style.display = 'block';
    document.getElementById('mock-results').style.display = 'none';
    
    // Show the third stat card in results just in case it was hidden previously
    const thirdStat = document.querySelector('#mock-results .res-stat:nth-child(3)');
    if (thirdStat) thirdStat.style.display = 'flex';
    
    renderMockNav();
    showMockQuestion();
    recordActivity();
}

function renderMockNav() {
    const container = document.getElementById('mock-questions-nav');
    if (!container) return;
    
    container.innerHTML = '';
    mockSession.list.forEach((q, idx) => {
        const div = document.createElement('div');
        
        // We will show a dot or check icon on the nav item if it's answered
        const isAnswered = mockSession.userAnswers[idx] && mockSession.userAnswers[idx].length > 0;
        const statusClass = isAnswered ? 'answered-good' : ''; // use existing css class for green accent
        
        div.className = `mock-nav-item ${idx === mockSession.currentIndex ? 'active' : ''} ${statusClass}`;
        div.setAttribute('data-idx', idx);
        
        div.innerHTML = `
            <div class="mock-nav-number">${idx + 1}</div>
            <span>Question ${idx + 1}</span>
        `;
        
        div.addEventListener('click', () => {
            mockSession.currentIndex = idx;
            showMockQuestion();
        });
        
        container.appendChild(div);
    });
}

function showMockQuestion() {
    const idx = mockSession.currentIndex;
    const q = mockSession.list[idx];
    
    // Update active nav item
    document.querySelectorAll('.mock-nav-item').forEach(item => {
        const itemIdx = parseInt(item.getAttribute('data-idx'), 10);
        const isAnswered = mockSession.userAnswers[itemIdx] && mockSession.userAnswers[itemIdx].length > 0;
        
        item.classList.toggle('active', itemIdx === idx);
        item.classList.toggle('answered-good', isAnswered);
    });
    
    document.getElementById('mock-q-category').innerText = q.category;
    document.getElementById('mock-q-type').innerText = q.multipleSelect ? "Multiple Select" : "Single Choice";
    document.getElementById('mock-q-index').innerText = `Question ${idx + 1} of ${mockSession.list.length}`;
    document.getElementById('mock-question-text').innerText = q.question;
    
    // Render Options
    const optionsContainer = document.getElementById('mock-options-container');
    optionsContainer.innerHTML = '';
    
    const selectedOptions = mockSession.userAnswers[idx] || [];
    
    q.options.forEach((opt, optIdx) => {
        const label = document.createElement('label');
        const isChecked = selectedOptions.includes(optIdx);
        label.className = `mock-option-label ${isChecked ? 'selected' : ''}`;
        
        const inputType = q.multipleSelect ? 'checkbox' : 'radio';
        const inputName = `mock-option-${idx}`;
        
        label.innerHTML = `
            <input type="${inputType}" name="${inputName}" value="${optIdx}" ${isChecked ? 'checked' : ''}>
            <span class="option-letter">${String.fromCharCode(65 + optIdx)}</span>
            <span class="option-text">${opt}</span>
        `;
        
        // Handle option change
        const input = label.querySelector('input');
        input.addEventListener('change', () => {
            if (q.multipleSelect) {
                const checkedInputs = Array.from(document.querySelectorAll(`input[name="${inputName}"]:checked`));
                mockSession.userAnswers[idx] = checkedInputs.map(el => parseInt(el.value, 10));
            } else {
                mockSession.userAnswers[idx] = [optIdx];
            }
            
            // Toggle visual selected state
            document.querySelectorAll(`input[name="${inputName}"]`).forEach(inp => {
                inp.parentElement.classList.toggle('selected', inp.checked);
            });
            
            // Update nav item state
            renderMockNav();
        });
        
        optionsContainer.appendChild(label);
    });
    
    // Navigation buttons visibility
    const prevBtn = document.getElementById('mock-prev-btn');
    const nextBtn = document.getElementById('mock-next-btn');
    const submitBtn = document.getElementById('mock-submit-btn');
    
    if (idx === 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'inline-flex';
    }
    
    if (idx === mockSession.list.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-flex';
    } else {
        nextBtn.style.display = 'inline-flex';
        submitBtn.style.display = 'none';
    }
}

function navigateMock(dir) {
    const nextIdx = mockSession.currentIndex + dir;
    if (nextIdx >= 0 && nextIdx < mockSession.list.length) {
        mockSession.currentIndex = nextIdx;
        showMockQuestion();
    }
}

function finishMockInterview() {
    const totalQ = mockSession.list.length;
    const answeredCount = Object.keys(mockSession.userAnswers).filter(k => mockSession.userAnswers[k].length > 0).length;
    
    if (answeredCount < totalQ) {
        if (!confirm(`You have only answered ${answeredCount} out of ${totalQ} questions. Are you sure you want to submit?`)) {
            return;
        }
    }
    
    mockSession.active = false;
    
    document.getElementById('mock-setup').style.display = 'none';
    document.getElementById('mock-active').style.display = 'none';
    document.getElementById('mock-results').style.display = 'block';
    
    let correctCount = 0;
    let wrongCount = 0;
    
    mockSession.list.forEach((q, idx) => {
        const userAns = mockSession.userAnswers[idx] || [];
        const correctAns = q.correctAnswer;
        
        // Sort arrays to compare
        const userSorted = [...userAns].sort();
        const correctSorted = [...correctAns].sort();
        
        const isCorrect = userSorted.length === correctSorted.length && userSorted.every((val, index) => val === correctSorted[index]);
        
        if (isCorrect) {
            correctCount++;
        } else {
            wrongCount++;
        }
    });
    
    const scorePct = Math.round((correctCount / totalQ) * 100);
    
    // Update score cards
    document.getElementById('mock-score-pct').innerText = `${scorePct}%`;
    document.getElementById('mock-total-answered').innerText = `Marks: ${correctCount} / ${totalQ} Correct`;
    document.getElementById('mock-perfect-count').innerText = correctCount;
    document.getElementById('mock-average-count').innerText = wrongCount;
    
    // Change badges text
    document.querySelector('#mock-results .res-stat:nth-child(1) .res-lbl').innerText = "Correct";
    document.querySelector('#mock-results .res-stat:nth-child(2) .res-lbl').innerText = "Wrong";
    
    const thirdStat = document.querySelector('#mock-results .res-stat:nth-child(3)');
    if (thirdStat) {
        thirdStat.style.display = 'none'; // Hide the third stat card in MCQ mode
    }
    
    // Render detailed breakdown
    const breakdownContainer = document.getElementById('mock-results-breakdown');
    if (breakdownContainer) {
        breakdownContainer.innerHTML = '';
        mockSession.list.forEach((q, idx) => {
            const userAns = mockSession.userAnswers[idx] || [];
            const correctAns = q.correctAnswer;
            
            const userSorted = [...userAns].sort();
            const correctSorted = [...correctAns].sort();
            const isCorrect = userSorted.length === correctSorted.length && userSorted.every((val, index) => val === correctSorted[index]);
            
            const item = document.createElement('div');
            item.className = `mock-breakdown-item mcq-breakdown ${isCorrect ? 'correct-border' : 'wrong-border'}`;
            
            // Build Options HTML with check/cross marks
            let optionsHtml = '<div class="mcq-results-options">';
            q.options.forEach((opt, optIdx) => {
                const isSelected = userAns.includes(optIdx);
                const isCorr = correctAns.includes(optIdx);
                
                let optionClass = '';
                let icon = '';
                
                if (isCorr) {
                    optionClass = 'option-correct';
                    icon = '<i class="fa-solid fa-circle-check option-result-icon text-success"></i>';
                } else if (isSelected && !isCorr) {
                    optionClass = 'option-wrong';
                    icon = '<i class="fa-solid fa-circle-xmark option-result-icon text-danger"></i>';
                }
                
                optionsHtml += `
                    <div class="mcq-result-option-item ${optionClass} ${isSelected ? 'user-selected' : ''}">
                        ${icon}
                        <span class="option-letter">${String.fromCharCode(65 + optIdx)}</span>
                        <span class="option-text">${opt}</span>
                    </div>
                `;
            });
            optionsHtml += '</div>';
            
            item.innerHTML = `
                <div class="mock-breakdown-q-row" style="cursor: pointer;">
                    <span class="mock-breakdown-num ${isCorrect ? 'bg-success' : 'bg-danger'}">${idx + 1}</span>
                    <span class="mock-breakdown-question" style="white-space: normal; overflow: visible; text-overflow: clip;">${q.question}</span>
                    <span class="badge ${isCorrect ? 'badge-success' : 'badge-danger'}">
                        ${isCorrect ? '<i class="fa-solid fa-check"></i> Correct' : '<i class="fa-solid fa-xmark"></i> Incorrect'}
                    </span>
                </div>
                <div class="mcq-breakdown-expanded-content" style="display: none; padding-top: 16px; margin-top: 12px; border-top: 1px dashed var(--border-color);">
                    ${optionsHtml}
                    <div class="mcq-explanation-box" style="margin-top: 16px; padding: 16px; background-color: rgba(0,0,0,0.2); border-radius: 8px; border-left: 4px solid var(--accent-primary);">
                        <strong>Explanation:</strong>
                        <p style="margin-top: 8px; font-size: 0.9rem; color: var(--text-secondary);">${q.explanation}</p>
                    </div>
                </div>
            `;
            
            // Add click handler to toggle expand
            const headerRow = item.querySelector('.mock-breakdown-q-row');
            headerRow.addEventListener('click', () => {
                const exp = item.querySelector('.mcq-breakdown-expanded-content');
                const isHidden = exp.style.display === 'none';
                exp.style.display = isHidden ? 'block' : 'none';
            });
            
            breakdownContainer.appendChild(item);
        });
    }
}

/* ==========================================================================
   PROGRESS & ANALYTICS PANELS
   ========================================================================== */
function renderTopicProgressBars() {
    const container = document.getElementById('topic-bars-list');
    if (!container) return;
    
    container.innerHTML = '';
    
    categories.forEach(cat => {
        const catQuestions = questions.filter(q => q.category === cat);
        const total = catQuestions.length;
        if (total === 0) return;
        
        const mastered = catQuestions.filter(q => userProgress[q.id] === 'mastered').length;
        const pct = Math.round((mastered / total) * 100);
        
        const div = document.createElement('div');
        div.className = 'topic-progress-item';
        div.innerHTML = `
            <div class="topic-progress-header">
                <span class="topic-name">${cat}</span>
                <span class="topic-percent">${pct}% (${mastered}/${total})</span>
            </div>
            <div class="topic-bar-container">
                <div class="topic-bar-fill" style="width: ${pct}%"></div>
            </div>
        `;
        container.appendChild(div);
    });
}

function resetAllProgress() {
    userProgress = {};
    questions.forEach(q => {
        userProgress[q.id] = 'unopened';
    });
    streak = 0;
    lastActiveDate = null;
    
    localStorage.removeItem('devops_hub_progress');
    localStorage.removeItem('devops_hub_streak');
    localStorage.removeItem('devops_hub_last_date');
    
    updateStreakDisplay();
    updateProgressWidgets();
    filterAndRenderQuestions();
    
    alert("All progress reset successfully!");
}

function studyWeakTopics() {
    // Find category with lowest completion percentage
    let lowestCat = null;
    let lowestPct = 101;
    
    categories.forEach(cat => {
        const catQuestions = questions.filter(q => q.category === cat);
        const total = catQuestions.length;
        if (total === 0) return;
        
        const mastered = catQuestions.filter(q => userProgress[q.id] === 'mastered').length;
        const pct = Math.round((mastered / total) * 100);
        
        if (pct < lowestPct) {
            lowestPct = pct;
            lowestCat = cat;
        }
    });
    
    if (lowestCat) {
        selectedFlashcardCategory = lowestCat;
        switchView('flashcards');
        
        // Set the active category in flashcards
        setTimeout(() => {
            const cardEl = document.querySelector(`.category-select-card[data-category="${lowestCat}"]`);
            if (cardEl) {
                selectFlashcardCategory(cardEl, lowestCat);
            }
            startFlashcards();
        }, 100);
    }
}

/* ==========================================================================
   QUESTION DETAIL MODAL (QUICK VIEW)
   ========================================================================== */
function showQuestionModal(id) {
    const q = questions.find(item => item.id === id);
    if (!q) return;
    
    const status = userProgress[q.id] || 'unopened';
    
    document.getElementById('modal-q-category').innerText = q.category;
    document.getElementById('modal-q-difficulty').innerText = q.difficulty;
    document.getElementById('modal-q-title').innerText = q.question;
    document.getElementById('modal-q-answer').innerHTML = formatAnswerToHTML(q.answer);
    
    // Setup actions
    const learnBtn = document.getElementById('modal-btn-learning');
    const masterBtn = document.getElementById('modal-btn-mastered');
    
    // Reset classes
    learnBtn.className = `btn ${status === 'learning' ? 'btn-primary' : 'btn-outline'}`;
    masterBtn.className = `btn ${status === 'mastered' ? 'btn-success' : 'btn-outline'}`;
    
    // Handlers
    learnBtn.onclick = () => {
        const next = userProgress[q.id] === 'learning' ? 'unopened' : 'learning';
        updateQuestionStatus(q.id, next);
        showQuestionModal(q.id); // refresh modal
    };
    
    masterBtn.onclick = () => {
        const next = userProgress[q.id] === 'mastered' ? 'unopened' : 'mastered';
        updateQuestionStatus(q.id, next);
        showQuestionModal(q.id); // refresh modal
    };
    
    document.getElementById('q-detail-modal').style.display = 'flex';
}

function hideQuestionModal() {
    document.getElementById('q-detail-modal').style.display = 'none';
}

/* ==========================================================================
   USER PROFILE, LIKES & COMMENTS (ENGAGEMENT)
   ========================================================================== */
let pageLikesCount = 142;
let isPageLiked = false;
let communityComments = [];

const defaultComments = [
    { name: "Aman Sharma", text: "This is an amazing website! The MCQ practice exam with 10/20 questions option is very challenging. Helped me prepare for my Azure DevOps interview.", date: "2 days ago" },
    { name: "Priya Patel", text: "Thank you Deepak! The detailed explanations in the mock exam are extremely helpful. I love the dark mode design.", date: "1 day ago" },
    { name: "Rohan Gupta", text: "Very clean UI. Shuffling the questions keeps the practice fresh. Highly recommended.", date: "5 hours ago" }
];

function initUserProfileAndEngagement() {
    const avatarBtn = document.getElementById('user-avatar-btn');
    const dropdown = document.getElementById('user-dropdown');
    const shareBtn = document.getElementById('share-website-btn');
    const likeBtn = document.getElementById('like-page-btn');
    const openCommentsBtn = document.getElementById('open-comments-btn');
    const closeCommentsBtn = document.getElementById('close-comments-btn');
    const commentsModal = document.getElementById('comments-modal');
    const commentsBackdrop = document.getElementById('comments-backdrop');
    const commentForm = document.getElementById('comment-form');

    // 1. Dropdown Toggle
    if (avatarBtn && dropdown) {
        avatarBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isHidden = dropdown.style.display === 'none' || dropdown.style.display === '';
            dropdown.style.display = isHidden ? 'flex' : 'none';
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target) && !avatarBtn.contains(e.target)) {
                dropdown.style.display = 'none';
            }
        });
    }

    // 2. Share Button
    if (shareBtn) {
        shareBtn.addEventListener('click', () => {
            const shareData = {
                title: 'DevOps & Azure DevOps Interview Hub',
                text: 'Prepare for your DevOps interviews with 270 Q&As, 3D Flashcards, and customizable MCQ Practice Exams!',
                url: window.location.origin + window.location.pathname
            };

            if (navigator.share) {
                navigator.share(shareData)
                    .catch(err => console.log('Error sharing:', err));
            } else {
                // Fallback: Copy to Clipboard
                navigator.clipboard.writeText(shareData.url)
                    .then(() => {
                        alert("Website link copied to clipboard! Share it with your friends.");
                    })
                    .catch(err => {
                        console.error("Failed to copy link:", err);
                    });
            }
        });
    }

    // 3. Likes Logic
    if (likeBtn) {
        // Load Likes State
        const savedLiked = localStorage.getItem('devops_hub_liked');
        const savedLikesCount = localStorage.getItem('devops_hub_likes_count');

        if (savedLikesCount) {
            pageLikesCount = parseInt(savedLikesCount, 10);
        } else {
            pageLikesCount = 142;
        }

        if (savedLiked === 'true') {
            isPageLiked = true;
            likeBtn.classList.add('liked');
            likeBtn.querySelector('i').className = 'fa-solid fa-heart';
        }

        updateLikesDisplay();

        likeBtn.addEventListener('click', () => {
            isPageLiked = !isPageLiked;
            if (isPageLiked) {
                pageLikesCount += 1;
                likeBtn.classList.add('liked');
                likeBtn.querySelector('i').className = 'fa-solid fa-heart';
            } else {
                pageLikesCount -= 1;
                likeBtn.classList.remove('liked');
                likeBtn.querySelector('i').className = 'fa-regular fa-heart';
            }

            localStorage.setItem('devops_hub_liked', isPageLiked.toString());
            localStorage.setItem('devops_hub_likes_count', pageLikesCount.toString());
            updateLikesDisplay();
        });
    }

    // 4. Comments Logic
    // Load Comments from LocalStorage
    const savedComments = localStorage.getItem('devops_hub_comments');
    if (savedComments) {
        communityComments = JSON.parse(savedComments);
    } else {
        communityComments = [...defaultComments];
        localStorage.setItem('devops_hub_comments', JSON.stringify(communityComments));
    }

    updateCommentsCountDisplay();

    // Modal Events
    if (openCommentsBtn && commentsModal) {
        openCommentsBtn.addEventListener('click', () => {
            commentsModal.style.display = 'flex';
            renderCommentsList();
            // Close dropdown
            if (dropdown) dropdown.style.display = 'none';
        });
    }

    const hideCommentsModal = () => {
        if (commentsModal) commentsModal.style.display = 'none';
    };

    if (closeCommentsBtn) closeCommentsBtn.addEventListener('click', hideCommentsModal);
    if (commentsBackdrop) commentsBackdrop.addEventListener('click', hideCommentsModal);

    // Comment Form Submission
    if (commentForm) {
        commentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = document.getElementById('comment-name');
            const textInput = document.getElementById('comment-text');

            if (nameInput && textInput) {
                const newComment = {
                    name: nameInput.value.trim(),
                    text: textInput.value.trim(),
                    date: 'Just now'
                };

                communityComments.unshift(newComment); // Add new comment at the top
                localStorage.setItem('devops_hub_comments', JSON.stringify(communityComments));

                // Clear form & re-render
                textInput.value = '';
                // Keep name filled for convenience
                
                renderCommentsList();
                updateCommentsCountDisplay();
            }
        });
    }
}

function updateLikesDisplay() {
    const textEl = document.getElementById('like-count-text');
    if (textEl) {
        textEl.innerText = `${pageLikesCount} Likes`;
    }
}

function updateCommentsCountDisplay() {
    const textEl = document.getElementById('comment-count-text');
    if (textEl) {
        textEl.innerText = `${communityComments.length} Comments`;
    }
}

function renderCommentsList() {
    const listEl = document.getElementById('comments-list');
    if (!listEl) return;

    listEl.innerHTML = '';
    communityComments.forEach(c => {
        const card = document.createElement('div');
        card.className = 'comment-card';
        card.innerHTML = `
            <div class="comment-card-header">
                <span class="comment-author">${escapeHTML(c.name)}</span>
                <span class="comment-date">${c.date}</span>
            </div>
            <div class="comment-body">${escapeHTML(c.text)}</div>
        `;
        listEl.appendChild(card);
    });
}

function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}
