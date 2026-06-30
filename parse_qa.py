import re
import json
import os

def clean_text(text):
    # Clean up weird spacing or characters if any
    text = text.replace('\u2028', '\n')
    text = text.replace('\r\n', '\n')
    return text.strip()

def parse_azure_cheatsheet(filepath):
    questions = []
    current_q = None
    current_a = []
    
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    # We want to match lines like "1. Explain Azure..." or "3. How can you..."
    # But be careful not to match numbered items inside answers.
    # Usually, questions are separated by blank lines and start at the beginning of the line.
    question_regex = re.compile(r'^\s*(\d+)\.\s+(.+)$')
    
    for line in lines:
        stripped = line.strip()
        match = question_regex.match(line)
        
        # A line is a question if it matches the regex AND it's not nested inside list items
        # (usually questions start at column 0, while list items inside answers are indented)
        is_question = False
        if match:
            # Check if the line has leading indentation (like tabs or multiple spaces)
            lead_space = len(line) - len(line.lstrip())
            if lead_space == 0:
                is_question = True
                
        if is_question:
            if current_q:
                ans_text = clean_text(''.join(current_a))
                # Remove leading "Answer:" if present
                if ans_text.lower().startswith('answer:'):
                    ans_text = ans_text[7:].strip()
                questions.append({
                    "question": current_q,
                    "answer": ans_text,
                    "source": "Azure DevOps Cheat Sheet"
                })
            current_q = match.group(2).strip()
            current_a = []
        else:
            if current_q is not None:
                current_a.append(line)
                
    # Add the last one
    if current_q:
        ans_text = clean_text(''.join(current_a))
        if ans_text.lower().startswith('answer:'):
            ans_text = ans_text[7:].strip()
        questions.append({
            "question": current_q,
            "answer": ans_text,
            "source": "Azure DevOps Cheat Sheet"
        })
        
    return questions

def parse_real_scenario(filepath):
    questions = []
    current_q = None
    current_a = []
    
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    # These are known headers or questions that we want to extract
    # We can also dynamically detect them.
    # Let's define a helper to check if a line is a question/header
    question_starters = [
        "tell me about", "explain", "what is", "how do", "how can", "how to", 
        "why ", "difference between", "do we ", "if error occurs", "suppose ",
        "have you ", "which type ", "describe ", "what are "
    ]
    
    def is_question_line(line, next_non_empty_line=""):
        stripped = line.strip()
        if not stripped:
            return False, None
            
        # Check if it starts with a number, e.g., "1. How do you..."
        num_match = re.match(r'^\s*(\d+)\.\s+(.+)$', line)
        if num_match:
            lead_space = len(line) - len(line.lstrip())
            # Ensure it's not indented list item (which might be part of an answer)
            if lead_space == 0:
                return True, num_match.group(2).strip()
                
        # Check if it's a known header
        lower_stripped = stripped.lower()
        
        # If it's a short line and starts with one of our starters
        is_starter = any(lower_stripped.startswith(starter) for starter in question_starters)
        
        # Or it ends with a question mark
        ends_with_q = stripped.endswith('?')
        
        # Specific known headers
        known_headers = [
            "tell me about yourself",
            "tell me about your project",
            "tell me about terraform implementation",
            "explain your ci/cd process",
            "difference between nsg and asg",
            "why terraform?",
            "why aks?",
            "what challenges did you face?",
            "how do you secure secrets?"
        ]
        
        if lower_stripped in known_headers:
            return True, stripped
            
        if (is_starter or ends_with_q) and len(stripped) < 120:
            # Avoid matching list items like "1. IaaS..." or bullet points
            if not stripped.startswith('•') and not stripped.startswith('*-') and not re.match(r'^\s*[\d🟢🔒🧩🌍🛡️☸️]+[️⃣]?\s', stripped):
                return True, stripped
                
        return False, None

    for i, line in enumerate(lines):
        stripped = line.strip()
        
        # Find the next non-empty line to help with context if needed
        next_line = ""
        for j in range(i + 1, min(i + 5, len(lines))):
            if lines[j].strip():
                next_line = lines[j].strip()
                break
                
        is_q, q_text = is_question_line(line, next_line)
        
        if is_q:
            if current_q:
                ans_text = clean_text(''.join(current_a))
                if ans_text:
                    questions.append({
                        "question": current_q,
                        "answer": ans_text,
                        "source": "DevOps Real Scenario Q&A"
                    })
            current_q = q_text
            current_a = []
        else:
            if current_q is not None:
                current_a.append(line)
                
    # Add the last one
    if current_q:
        ans_text = clean_text(''.join(current_a))
        if ans_text:
            questions.append({
                "question": current_q,
                "answer": ans_text,
                "source": "DevOps Real Scenario Q&A"
            })
            
    return questions

def categorize_question(q):
    q_text = q['question'].lower()
    a_text = q['answer'].lower()
    
    # 1. Intro / Behavioral
    if any(x in q_text for x in ["yourself", "your project", "why did you", "why do you", "challenges", "reason to change", "why need to change"]):
        return "Behavioral & Project"
        
    # 2. Terraform
    if "terraform" in q_text or "terraform" in a_text[:100] or "tfsec" in q_text:
        return "Terraform (IaC)"
        
    # 3. Kubernetes & Docker
    if any(x in q_text for x in ["kubernetes", "k8s", "aks", "docker", "container", "pod", "replica", "statefulset", "deployment"]):
        return "Docker & Kubernetes"
        
    # 4. Azure & Azure DevOps
    if any(x in q_text for x in ["azure", "pipeline", "rbac", "active directory", "nsg", "asg", "load balancer", "vnet", "subnet", "bastion", "key vault", "app gateway", "landing zone"]):
        return "Azure & Azure DevOps"
        
    # 5. Linux & Git
    if any(x in q_text for x in ["linux", "git", "bash", "command", "chown", "chmod"]):
        return "Linux & Git"
        
    # Default to DevOps General
    return "DevOps General"

def main():
    dir_path = "/Users/deepak/Documents/interview document"
    file1 = os.path.join(dir_path, "Azure_DevOps_Interview_QA_Cheat_Sheet.txt")
    file2 = os.path.join(dir_path, "Devops Real senerio based QA.txt")
    
    q1 = parse_azure_cheatsheet(file1)
    q2 = parse_real_scenario(file2)
    
    all_questions = q1 + q2
    
    # Post-process, categorize, and clean
    categorized_questions = []
    seen_questions = set()
    
    id_counter = 1
    for q in all_questions:
        q_clean = q['question'].strip()
        # Avoid exact duplicates
        if q_clean.lower() in seen_questions:
            continue
        seen_questions.add(q_clean.lower())
        
        category = categorize_question(q)
        
        # Estimate difficulty based on length of answer and keywords
        if len(q['answer']) > 500 or "scenario" in q_clean.lower() or "challenge" in q_clean.lower():
            difficulty = "Hard"
        elif len(q['answer']) > 200:
            difficulty = "Medium"
        else:
            difficulty = "Easy"
            
        categorized_questions.append({
            "id": id_counter,
            "category": category,
            "question": q_clean,
            "answer": q['answer'],
            "difficulty": difficulty,
            "source": q['source']
        })
        id_counter += 1
        
    print(f"Total questions parsed: {len(categorized_questions)}")
    
    # Print category counts
    counts = {}
    for q in categorized_questions:
        counts[q['category']] = counts.get(q['category'], 0) + 1
    print("Category counts:")
    for cat, count in counts.items():
        print(f"  {cat}: {count}")
        
    # Write to data.js for direct frontend use
    output_js_path = os.path.join(dir_path, "data.js")
    with open(output_js_path, 'w', encoding='utf-8') as f:
        f.write("// DevOps Q&A Data\n")
        f.write("const qaData = ")
        json.dump(categorized_questions, f, indent=2, ensure_ascii=False)
        f.write(";\n")
        
    print(f"Successfully wrote data to {output_js_path}")

if __name__ == "__main__":
    main()
