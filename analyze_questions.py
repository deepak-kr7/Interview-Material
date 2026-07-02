import re

def clean_text(text):
    text = text.replace('\u2028', '\n')
    text = text.replace('\r\n', '\n')
    return text.strip()

def normalize_question(q):
    q = q.lower()
    # Remove numbering and special prefixes
    q = re.sub(r'^\s*(\d+)\.\s+', '', q)
    q = re.sub(r'^q\d+:\s*', '', q)
    q = re.sub(r'^question:-\s*', '', q)
    q = re.sub(r'^question:\s*', '', q)
    q = re.sub(r'\s+', ' ', q)
    return q.strip()

def analyze():
    filepath = "/Users/deepak/Documents/interview document/Professional_Interview_QA_Guide.txt"
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    parts = content.split('\x0c')
    
    all_qs = []
    
    placeholders = [
        "important interview topic",
        "commonly used concept",
        "commonly used in real-world",
        "depends on functionality",
        "breakdown of answers",
        "is a commonly used concept",
        "acts as a bridge",
        "stands for"
    ]
    
    for part in parts[1:]:
        lines = part.split('\n')
        if not lines:
            continue
        
        section_name = lines[0].strip()
        current_q = None
        current_a = []
        
        header_found = False
        for line in lines:
            stripped = line.strip()
            if not stripped:
                continue
            if not header_found and stripped == section_name:
                header_found = True
                continue
            
            if stripped.startswith('Question:'):
                if current_q:
                    all_qs.append({
                        "section": section_name,
                        "question": current_q,
                        "answer": clean_text('\n'.join(current_a))
                    })
                current_q = stripped[len('Question:'):].strip()
                current_a = []
            elif stripped.startswith('Answer:'):
                if current_q:
                    current_a.append(stripped[len('Answer:'):].strip())
            else:
                if current_q:
                    current_a.append(line)
                    
        if current_q:
            all_qs.append({
                "section": section_name,
                "question": current_q,
                "answer": clean_text('\n'.join(current_a))
            })

    unique_qs = {}
    for qa in all_qs:
        norm = normalize_question(qa['question'])
        ans = qa['answer']
        is_placeholder = any(p in ans.lower() for p in placeholders) or len(ans) < 15
        
        if norm not in unique_qs:
            unique_qs[norm] = []
        unique_qs[norm].append((qa, is_placeholder))
        
    print(f"Total parsed Q&As: {len(all_qs)}")
    print(f"Total unique normalized questions: {len(unique_qs)}")
    
    placeholder_unique_count = 0
    for norm, occurrences in unique_qs.items():
        # if any occurrence is a placeholder, we count it
        if any(occ[1] for occ in occurrences):
            placeholder_unique_count += 1
            
    print(f"Unique questions that need answers: {placeholder_unique_count}")
    
    # Write all unique questions needing answers to a text file for review
    with open("questions_needing_answers.txt", "w", encoding="utf-8") as out:
        for idx, (norm, occurrences) in enumerate(unique_qs.items()):
            if any(occ[1] for occ in occurrences):
                orig_q = occurrences[0][0]['question']
                section = occurrences[0][0]['section']
                out.write(f"{idx+1}. [{section}] {orig_q}\n")
                
    print("Wrote questions needing answers to questions_needing_answers.txt")

if __name__ == '__main__':
    analyze()
