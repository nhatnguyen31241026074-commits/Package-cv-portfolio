const fs = require("fs");

const files = [
  "D:/ProjectX_Package-CV/src/app/components/Screen4Finish.tsx",
  "D:/ProjectX_Package-CV/landing-page-repo/app/sfp2026/cv-builder/src/app/components/Screen4Finish.tsx",
];

files.forEach((f) => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, "utf8");

    // Make sure aiPrompt is correctly formatted in props
    content = content.replace(
      /navigator\.clipboard\.writeText\(bullet\)/g,
      "navigator.clipboard.writeText(currentPrompt)",
    );

    const newCTA = `
          {/* Primary CTA */}
          <button
            onClick={handleCopy}
            style={{
              width: "100%",
              padding: "20px 32px",
              borderRadius: 12,
              background: copied ? "#22C55E" : "#0E56FA",
              color: "white",
              fontSize: 18,
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              border: "none",
              boxShadow: "0 8px 24px rgba(14,86,250,0.25)",
              transition: "all 0.2s ease-in-out",
            }}
            onMouseOver={(e) => {
              if(!copied) Object.assign(e.currentTarget.style, { transform: 'translateY(-2px)', boxShadow: '0 12px 32px rgba(14,86,250,0.35)' });
            }}
            onMouseOut={(e) => {
              if(!copied) Object.assign(e.currentTarget.style, { transform: 'translateY(0)', boxShadow: '0 8px 24px rgba(14,86,250,0.25)' });
            }}
          >
            {copied ? "Copied! ✓" : "Copy Your AI Rewrite Prompt ✨"}
          </button>

          <div
            style={{
              fontSize: 12,
              color: "#6B7280",
              textAlign: "center",
              marginTop: 4,
            }}
          >
            Works with ChatGPT, Claude, Gemini & more
          </div>
`;

    // Remove old subtexts / copy actions, then insert.
    if (!content.includes("Works with ChatGPT")) {
      // Only insert once
      content = content.replace(/\{\/\*\s*Primary CTA.*?\*\/\}/, newCTA);
    }

    // Also remove "YOUR OPTIMIZED BULLET" if it still exists. (FIX 6)
    const cardStart = content.indexOf("{/* Bullet Preview Card */}");
    if (cardStart !== -1) {
      const actionStart = content.indexOf("{/* Action Buttons */}", cardStart);
      if (actionStart !== -1 && actionStart > cardStart) {
        content =
          content.substring(0, cardStart) + content.substring(actionStart);
      }
    }

    // Replace headline and subheadline if it's still old
    content = content.replace(
      /Your CV is recruiter-ready/g,
      "Your AI rewrite prompt is ready 🎯",
    );
    content = content.replace(
      /You've applied the XYZ formula across your CV sections\.[\s]*Time to take the next step with your full application kit\./gm,
      "Copy the prompt below → paste into any AI tool → get a stronger CV bullet in seconds",
    );

    // Remove Apply for SFP button
    content = content.replace(
      /<button[^>]*>[\s\S]*?Apply for SFP Round 2[\s\S]*?<\/button>/gm,
      "",
    );

    fs.writeFileSync(f, content);
    console.log("Updated", f);
  }
});
