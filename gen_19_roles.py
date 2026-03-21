import json

roles = [
    'Frontend Engineer', 'Backend Engineer', 'Full Stack Dev', 'Mobile Dev', 'DevOps',
    'Product Management (PM)', 'Product Growth / Growth PM', 'Business Analytics (BA)',
    'UI/UX / Product Design', 'Sales Engineer', 'Solutions Architect', 'Partnerships Lead',
    'Operations', 'AI/ML Engineer', 'AI Product Manager', 'Prompt Engineer', 'Data Scientist'
]

templates = {}
for r in roles:
    safe_r = r.replace(" ", "")
    templates[r] = {
        'starter': {
            'name': f'Starter {r}', 'title': f'Intern {r}', 'email': f'starter@{safe_r}.com', 'location': 'Vietnam', 'linkedin': 'linkedin.com/demo',
            'summary': f'Entry-level {r} passionate about growth and learning fundamental {r} concepts.',
            'experience': [{'company': f'{r} Startup', 'role': f'{r} Intern', 'dates': '2024', 'bullets': [f'Did entry-level {r} things', 'Learned a lot from seniors']}],
            'projects': [{'name': f'{r} Demo', 'type': 'Academic', 'bullets': [f'Great {r} project built at university']}]
        },
        'developing': {
            'name': f'Junior {r}', 'title': f'Junior {r}', 'email': f'junior@{safe_r}.com', 'location': 'Vietnam', 'linkedin': 'linkedin.com/demo',
            'summary': f'Mid-level {r} delivering impact and executing robust technical architectures.',
            'experience': [{'company': f'{r} Scaleup', 'role': f'Junior {r}', 'dates': '2022-2024', 'bullets': [f'Did bigger {r} things', f'Owned a core {r} feature']}],
            'projects': [{'name': f'{r} Tool', 'type': 'Internal', 'bullets': [f'Saved {r} team time']}]
        },
        'ready': {
            'name': f'Senior {r}', 'title': f'Senior {r}', 'email': f'senior@{safe_r}.com', 'location': 'Vietnam', 'linkedin': 'linkedin.com/demo',
            'summary': f'Senior {r} leading teams and strategy, driving massive business outcomes.',
            'experience': [{'company': f'{r} Enterprise', 'role': f'Lead {r}', 'dates': '2020-2024', 'bullets': [f'Led the {r} org scaling revenue', 'Mentored junior developers']}],
            'projects': [{'name': f'{r} Architecture', 'type': 'Strategic', 'bullets': [f'10x performance for {r} workflows']}]
        }
    }

output = f'// Auto-generated 19 roles\nexport const EXPANDED_CV_TEMPLATES: Record<string, any> = {json.dumps(templates, indent=2)};\n'
with open('src/data/expandedCvData.ts', 'w', encoding='utf-8') as f:
    f.write(output)

print('Generated 19 roles successfully!')
