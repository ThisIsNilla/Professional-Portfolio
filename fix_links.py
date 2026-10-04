import re

with open('app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace header navigation links
content = content.replace('href="#" data-path="overview"', 'href="#top" data-path="overview"')
content = content.replace('href="#" data-path="active-repos"', 'href="#repos-section" data-path="active-repos"')
content = content.replace('href="#" data-path="architecture-deep-dives"', 'href="#case-studies-section" data-path="architecture-deep-dives"')
content = content.replace('href="#" data-path="core-stack"', 'href="#core-stack-section" data-path="core-stack"')
content = content.replace('href="#" data-path="connect"', 'href="#contact-section" data-path="connect"')

# Replace "Live on GitHub" link in header
content = content.replace('href="https://github.com"', 'href="https://github.com/thisisnilla"')

# Ensure the core stack section has the ID
content = content.replace('<section className="flex flex-col gap-space-lg">', '<section className="flex flex-col gap-space-lg" id="core-stack-section">', 1)

# Add id="top" to the main container or header so overview works
content = content.replace('<main className="w-full pt-16 bg-surface min-h-[calc(100vh-80px)]">', '<main id="top" className="w-full pt-16 bg-surface min-h-[calc(100vh-80px)]">')

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
