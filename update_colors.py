import os

# Define replacement mappings
# Crimson (#A6192E) -> Brand Blue (#0E56FA)
# Lighter Red (#C41E3A) -> Brand Cyan (#17CAFA)
# Navy (#002D62) -> Brand Black (#01001F)
# 166,25,46 -> 14,86,250
# 0,45,98 -> 1,0,31

replacements = [
    ('#A6192E', '#0E56FA'),
    ('166,25,46', '14,86,250'),
    ('#C41E3A', '#17CAFA'),
    ('#002D62', '#01001F'),
    ('0,45,98', '1,0,31')
]

files_to_update = [
    'd:/ProjectX_Package-CV/src/app/components/Screen3Workspace.tsx',
    'd:/ProjectX_Package-CV/src/app/components/Screen4Finish.tsx',
    'd:/ProjectX_Package-CV/src/app/components/WelcomePage.tsx',
    'd:/ProjectX_Package-CV/src/app/components/Screen1Pillars.tsx',
    'd:/ProjectX_Package-CV/landing-page-repo/app/sfp2026/cv-builder/page.tsx',
    'd:/ProjectX_Package-CV/landing-page-repo/app/sfp2026/cv-builder/src/app/components/Screen3Workspace.tsx',
    'd:/ProjectX_Package-CV/landing-page-repo/app/sfp2026/cv-builder/src/app/components/Screen4Finish.tsx',
    'd:/ProjectX_Package-CV/landing-page-repo/app/sfp2026/cv-builder/src/app/components/WelcomePage.tsx',
    'd:/ProjectX_Package-CV/landing-page-repo/app/sfp2026/cv-builder/src/app/components/Screen1Pillars.tsx',
]

header_data = """  header: {
    starter: {
      hrQuote: "Keep your header clean and simple. Include a link to your LinkedIn and GitHub/Portfolio.",
      hrName: "Recruiter",
      hrRole: "HR",
      hrCompany: "google",
      hrAvatar: "man",
      aiTitle: "Header Advice",
      aiSubtext: "Ensure contact details are up to date.",
      aiPrompt: "Ensure my contact info is clean."
    },
    developing: {
      hrQuote: "Keep your header clean and simple. Include a link to your LinkedIn and GitHub/Portfolio.",
      hrName: "Recruiter",
      hrRole: "HR",
      hrCompany: "google",
      hrAvatar: "man",
      aiTitle: "Header Advice",
      aiSubtext: "Ensure contact details are up to date.",
      aiPrompt: "Ensure my contact info is clean."
    },
    ready: {
      hrQuote: "Keep your header clean and simple. Include a link to your LinkedIn and GitHub/Portfolio.",
      hrName: "Recruiter",
      hrRole: "HR",
      hrCompany: "google",
      hrAvatar: "man",
      aiTitle: "Header Advice",
      aiSubtext: "Ensure contact details are up to date.",
      aiPrompt: "Ensure my contact info is clean."
    }
  },"""

for fpath in set(files_to_update):
    if not os.path.exists(fpath): continue
    with open(fpath, 'r', encoding='utf-8') as f:
        text = f.read()
    
    for old, new in replacements:
        text = text.replace(old, new)
        
    if 'Screen3Workspace.tsx' in fpath:
        if 'header: {' not in text:
            text = text.replace('summary: {', header_data + '\\n  summary: {')
            
    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(text)

print("Updates applied to all files!")
