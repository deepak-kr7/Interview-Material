# DevOps & Azure DevOps Interview Preparation Hub

This is a premium, interactive, and fully responsive web application designed to help job seekers and interview candidates prepare for DevOps and Azure DevOps interviews. It contains **192 questions and answers** extracted from your study documents.

## Features Included
1. **Interactive Q&A Explorer**: Browse questions categorized by topic (Azure, Terraform, Docker, Kubernetes, Linux, Git, etc.) with real-time search, difficulty filters, and status tracking.
2. **Active Recall Flashcards**: Test your knowledge with 3D-flipping flashcards. Mark cards as "Mastered" or "Still Learning" to track progress.
3. **Mock Interview Simulator**: Simulate a real technical interview. Select topics, set the number of questions, answer them, reveal recommended answers, self-evaluate, and get an overall performance score.
4. **Progress Tracker**: Visualize preparation progress with radial charts and topic-by-topic breakdown. Saves progress automatically to the browser (`localStorage`).
5. **Dark & Light Mode**: Premium dark mode (default) and clean light mode toggle.
6. **No-Setup Local Loading**: Can be opened by double-clicking `index.html` directly in the browser (works offline without any local server!).

---

## Files Created
* `index.html` - Main structure and layout.
* `style.css` - Custom premium styling and animations.
* `app.js` - Application logic (search, flashcards, mock interview, progress).
* `data.js` - The database containing all 192 questions (compiled from your Word documents).
* `parse_qa.py` - The Python script used to parse and extract the Q&As.

---

## How to Host this Website for FREE

### Option 1: GitHub Pages (Recommended)
GitHub Pages is the easiest way to host static websites for free.
1. Go to [GitHub](https://github.com/) and log in (or create a free account).
2. Click **New Repository**.
   * Name it: `devops-interview-prep`
   * Keep it **Public**.
   * Do not add a README, `.gitignore`, or license.
   * Click **Create repository**.
3. Upload your files:
   * Click **"uploading an existing file"** link.
   * Drag and drop these 4 files: `index.html`, `style.css`, `app.js`, and `data.js`.
   * Click **Commit changes**.
4. Enable GitHub Pages:
   * In your repository, go to **Settings** (top tabs).
   * Scroll down the left sidebar and click **Pages**.
   * Under **Build and deployment -> Branch**, change "None" to **`main`** (or `master`).
   * Click **Save**.
5. Your website will be live in 1-2 minutes at:  
   `https://<your-github-username>.github.io/devops-interview-prep/`

---

### Option 2: Vercel (Super Fast)
1. Go to [Vercel](https://vercel.com/) and sign up with your GitHub account.
2. Click **Add New** -> **Project**.
3. Import your `devops-interview-prep` GitHub repository.
4. Click **Deploy**. Vercel will automatically host it and give you a free `vercel.app` link. Any time you update your code on GitHub, Vercel will automatically update your website!
