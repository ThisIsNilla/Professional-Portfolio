import re

def html_to_jsx(html_str):
    # Basic class to className
    jsx = html_str.replace('class="', 'className="')
    
    # Self-closing tags that are typically open in HTML
    tags_to_close = ['img', 'input', 'br', 'hr', 'link', 'meta']
    
    for tag in tags_to_close:
        pattern = re.compile(r'(<' + tag + r'[^>]*?)(?<!/)>')
        jsx = pattern.sub(r'\1 />', jsx)
        
    def style_replacer(match):
        style_str = match.group(1)
        parts = style_str.split(';')
        rules = []
        for p in parts:
            if not p.strip(): continue
            k, v = p.split(':', 1)
            k = k.strip()
            v = v.strip()
            k_parts = k.split('-')
            k_camel = k_parts[0] + ''.join(word.capitalize() for word in k_parts[1:])
            rules.append(f"{k_camel}: '{v}'")
        return 'style={{ ' + ', '.join(rules) + ' }}'
        
    jsx = re.sub(r'style="([^"]*)"', style_replacer, jsx)
    
    # Also fix inline onclicks
    # e.g. onclick="navigator.clipboard.writeText('4E9AB781990CFE428107DA1139024BC1AF88205B')"
    # Since we have the CopyButton, we can just replace the whole button if it matches.
    
    return jsx

with open('screen1.html', 'r', encoding='utf-8') as f:
    html = f.read()

body_match = re.search(r'<body[^>]*>(.*?)</body>', html, re.DOTALL)
if body_match:
    body_html = body_match.group(1)
else:
    body_html = html

body_html = re.sub(r'<script.*?>.*?</script>', '', body_html, flags=re.DOTALL)

jsx = html_to_jsx(body_html)
jsx = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', jsx, flags=re.DOTALL)

# Replace the Copy button with the Client component.
jsx = re.sub(r'<button className="hover:text-primary transition-colors shrink-0" onclick="navigator.clipboard.writeText\([^)]*\)">.*?</button>', r"<CopyButton text='4E9AB781990CFE428107DA1139024BC1AF88205B' />", jsx, flags=re.DOTALL)

# Find the repos section to replace the grid
parts = jsx.split('id="repos-section">')
if len(parts) == 2:
    part2 = parts[1]
    section_end = part2.find('</section>')
    
    inner_section = part2[:section_end]
    
    # find the grid
    grid_start = inner_section.find('<div className="grid grid-cols-1 md:grid-cols-2')
    
    if grid_start != -1:
        new_inner = inner_section[:grid_start] + '<GithubGrid repos={repos} />\n          '
        jsx = parts[0] + 'id="repos-section">\n' + new_inner + part2[section_end:]
    else:
        # Fallback if the ID was repos
        pass
else:
    # try id="repos"
    parts = jsx.split('id="repos">')
    if len(parts) == 2:
        part2 = parts[1]
        section_end = part2.find('</section>')
        inner_section = part2[:section_end]
        grid_start = inner_section.find('<div className="grid grid-cols-1 md:grid-cols-2')
        if grid_start != -1:
            new_inner = inner_section[:grid_start] + '<GithubGrid repos={repos} />\n          '
            jsx = parts[0] + 'id="repos">\n' + new_inner + part2[section_end:]

# Update image src if the logo is present
# e.g., src="https://lh3.googleusercontent.com/aida/..." to src="/logo.svg"
# Let's just use regex to replace any image source matching googleusercontent to point to /logo.svg if it's the logo.
# Actually, the logo in screen1 is: src="https://lh3.googleusercontent.com/aida/...".
# We can just change all image sources containing "lh3.googleusercontent.com" to "/logo.png" since there's likely only one.
jsx = re.sub(r'src="https://lh3.googleusercontent.com[^"]+"', 'src="/logo.png"', jsx)

page_content = f"""import CopyButton from '@/components/CopyButton';
import GithubGrid from '@/components/GithubGrid';
import {{ getFeaturedRepos }} from '@/lib/github';

export default async function Page() {{
  const repos = await getFeaturedRepos();

  return (
    <>
      {jsx}
    </>
  );
}}
"""

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(page_content)
