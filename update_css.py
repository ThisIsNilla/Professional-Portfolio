import re

with open('screen1.html', 'r', encoding='utf-8') as f:
    html = f.read()

overrides_match = re.search(r'<style id="palette-overrides"[^>]*>(.*?)</style>', html, re.DOTALL)
overrides = overrides_match.group(1) if overrides_match else ""

css_content = f"""@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {{
  html, body {{
    margin: 0;
    padding: 0;
  }}
  body {{
    overscroll-behavior: none;
  }}
  main > :first-child {{
    margin-top: 0 !important;
  }}
  main > :last-child {{
    margin-bottom: 0 !important;
  }}
}}

::-webkit-scrollbar {{
  display: none;
}}

{overrides}
"""

with open('app/globals.css', 'w', encoding='utf-8') as f:
    f.write(css_content)
