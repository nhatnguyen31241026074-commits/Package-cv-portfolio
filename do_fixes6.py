import os
import re

files = [
    'D:/ProjectX_Package-CV/landing-page-repo/app/sfp2026/cv-builder/src/app/components/Screen4Finish.tsx',
    'D:/ProjectX_Package-CV/src/app/components/Screen4Finish.tsx'
]

for file in files:
    if not os.path.exists(file):
        continue
        
    with open(file, 'r', encoding='utf-8') as f:
        text = f.read()

    # Apply fix 1 & prop changes
    text = re.sub(
        r'Your CV is\s*<br />\s*<span[^>]*>recruiter-ready\.<\/span>',
        'Your AI rewrite prompt is\n            <br />\n            <span style={{ color: "#0E56FA" }}>ready 🎯</span>',
        text
    )
    
    text = re.sub(
        r"You've applied the XYZ formula across your CV sections\. Time to take[\s\S]*?the next step with your full application kit\.",
        "Copy the prompt below → paste into any AI tool → get a stronger CV bullet in seconds",
        text
    )
    text = re.sub(
        r"Copy the prompt below and paste into any AI tool to rewrite your CV instantly\.",
        "Copy the prompt below → paste into any AI tool → get a stronger CV bullet in seconds",
        text
    )

    # Props
    text = re.sub(
        r'interface Props \{[\s\S]*?(?:bullet.*onRestart.*?|onRestart.*?bullet.*?)\}',
        'interface Props {\n  aiPrompt?: string;\n  bullet?: string;\n  onRestart: () => void;\n  onBack?: () => void;\n}',
        text
    )

    if 'export function Screen4Finish({ aiPrompt' not in text:
        text = re.sub(
            r'export function Screen4Finish\(\{[\s\S]*?\}\s*:\s*Props\)\s*\{',
            'export function Screen4Finish({ aiPrompt, bullet, onRestart, onBack }: Props) {\n  const currentPrompt = aiPrompt || "Prompt not available — please restart.";',
            text
        )

    # Remove Bullet Preview card entirely including its motion div
    text = re.sub(
        r'\{\s*\/\*\s*Bullet Preview Card\s*\*\/[\s\S]*?\{bullet && \([\s\S]*?Click to copy bullet[\s\S]*?<\/button>\s*<\/div>\s*<\/motion\.div>\s*\)\s*\}\s*',
        '',
        text
    )

    # Replace Action Buttons block completely
    replacement = """{/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {/* Primary CTA (Massive Copy Prompt) */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              if (typeof navigator !== "undefined" && navigator.clipboard) {
                navigator.clipboard.writeText(currentPrompt).then(() => {
                  setCopied(true);
                  if (typeof (window as any).posthog !== "undefined") {
                      (window as any).posthog.capture("cv_builder_prompt_copied");
                  }
                  setTimeout(() => setCopied(false), 2000);
                });
              }
            }}
            style={{
              width: "100%",
              padding: "20px 32px",
              borderRadius: 12,
              background: copied ? "#22C55E" : "#0E56FA",
              color: "white",
              fontSize: 18,
              fontWeight: "bold",
              cursor: "pointer",
              border: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              boxShadow: copied 
                ? "0 8px 32px rgba(34,197,94,0.4), 0 2px 8px rgba(34,197,94,0.2)"
                : "0 8px 32px rgba(14,86,250,0.4), 0 2px 8px rgba(14,86,250,0.2)",
              transition: "all 0.2s ease"
            }}
          >
            <div>{copied ? "Copied! ✓" : "Copy Your AI Rewrite Prompt ✨"}</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.8)", fontWeight: "normal" }}>
              Works with ChatGPT, Claude, Gemini & more
            </div>
          </motion.button>

          {/* Ghost button */}
          <button
            style={{
              width: "100%",
              padding: "14px 24px",
              borderRadius: 14,
              border: "1px solid #E2E8F0",
              background: "white",
              color: "#475569",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 9,
              letterSpacing: "-0.02em",
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              transition: "all 0.18s",
            }}
            onClick={() => {
               const link = document.createElement('a');
               link.href = '/PJX_CV_Guide_2026.pdf';
               link.download = 'PJX_CV_Guide_2026.pdf';
               link.click();
            }}
            onMouseEnter={(e) => {
              try { e.currentTarget.style.borderColor = "#CBD5E1"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)"; } catch(err){}
            }}
            onMouseLeave={(e) => {
              try { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.04)"; } catch(err){}
            }}
          >
            <Download size={15} strokeWidth={2} />
            Download Full PJX CV Template & Action Verb Checklist
          </button>
        </motion.div>

        {/* Restart */}"""

    text = re.sub(r'\{\s*\/\*\s*Action Buttons\s*\*\/[\s\S]*?\{\s*\/\*\s*Restart\s*\*\/', replacement, text)

    with open(file, 'w', encoding='utf-8') as f:
        f.write(text)
    print("Python fix done for", file)
