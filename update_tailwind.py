import re
import json

with open('screen1.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Find tailwind.config={...}
match = re.search(r'tailwind\.config=(.*?)</script>', html)
if match:
    config_str = match.group(1)
    
    # We can just write it into a template
    js_template = f"""import type {{ Config }} from "tailwindcss";

const config: Config = {config_str};

config.content = [
    "./pages/**/*.{{js,ts,jsx,tsx,mdx}}",
    "./components/**/*.{{js,ts,jsx,tsx,mdx}}",
    "./app/**/*.{{js,ts,jsx,tsx,mdx}}",
];
config.plugins = [];

export default config;
"""
    with open('tailwind.config.ts', 'w', encoding='utf-8') as f:
        f.write(js_template)
    print("Successfully updated tailwind.config.ts")
else:
    print("Could not find tailwind config")
