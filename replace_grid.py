import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

parts = content.split('id="repos">')
if len(parts) == 2:
    part2 = parts[1]
    section_end = part2.find('</section>')
    
    inner_section = part2[:section_end]
    
    grid_start = inner_section.find('<div className="grid grid-cols-1 md:grid-cols-2')
    
    if grid_start != -1:
        new_inner = inner_section[:grid_start] + '<GithubGrid repos={repos} />\n          '
        new_content = parts[0] + 'id="repos">\n' + new_inner + part2[section_end:]
        
        with open('app/page.tsx', 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("Success replacing grid in page.tsx")
    else:
        print("Could not find grid")
else:
    print("Could not find id=repos")
