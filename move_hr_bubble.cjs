const fs = require("fs");
const file =
  "d:\\ProjectX_Package-CV\\src\\app\\components\\Screen3Workspace.tsx";
let code = fs.readFileSync(file, "utf8");

// 1. Remove Block 1 from RightInsightPanel
const block1Start = code.search(
  /\{\/\* ── Block 1: HR Quote with Company Logo ── \*\/\}/,
);
const block2Start = code.search(/\{\/\* ── Block 2: Step Checklist ── \*\/\}/);

if (block1Start !== -1 && block2Start !== -1) {
  code = code.substring(0, block1Start) + code.substring(block2Start);
} else {
  console.log("Could not find Block 1 or Block 2");
}

// 2. Add HRQuoteBubble component before LeftCVColumn
const hrBubbleCode = `

// ─── HR Quote Floating Bubble ──────────────────────────────────────────────────

function HRQuoteBubble({
  section,
  level,
  selectedRole,
}: {
  section: CVSection;
  level: DiagnosticLevel;
  selectedRole: string | null;
}) {
  const data = PANEL_DATA[section][level];
  const roleData = getRoleLevelData(selectedRole, level);
  const hrQuote =
    (roleData as any).hrQuotes?.[section] ||
    (roleData as any).hrQuote ||
    data.hrQuote;
  const hrName = roleData.hrName;
  const hrRole = roleData.hrRole;
  const hrCompany = roleData.hrCompany;
  const companyInfo = COMPANY_INFO[hrCompany];

  return (
    <motion.div
      key={section + level}
      initial={{ opacity: 0, y: 12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.32, ease: "easeOut" }}
      style={{
        position: "absolute",
        bottom: 24,
        left: 24,
        width: 440,
        zIndex: 50,
        borderRadius: 16,
        border: "1px solid rgba(226, 232, 240, 0.8)",
        background: "white",
        padding: "20px 22px",
        boxShadow: "0 12px 40px rgba(2, 8, 24, 0.08), 0 4px 12px rgba(2, 8, 24, 0.04)",
      }}
    >
      {/* Speech bubble tail */}
      <div 
        style={{
          position: 'absolute',
          top: -10,
          left: 36,
          width: 0,
          height: 0,
          borderLeft: '10px solid transparent',
          borderRight: '10px solid transparent',
          borderBottom: '11px solid white',
          filter: 'drop-shadow(0 -2px 1px rgba(0,0,0,0.05))'
        }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 14,
        }}
      >
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            overflow: "hidden",
            flexShrink: 0,
            border: "2px solid #F8FAFC",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
          }}
        >
          <img
            src={data.hrAvatar === "man" ? AVATAR_MAN : AVATAR_WOMAN}
            alt={hrName}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 3,
            }}
          >
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#0f172a",
                letterSpacing: "-0.01em",
              }}
            >
              {hrName}
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                padding: "3px 8px 3px 6px",
                borderRadius: 6,
                background: companyInfo.color,
                boxShadow: \`0 2px 8px \${companyInfo.color}40\`,
              }}
            >
              <Building2
                size={10}
                color={companyInfo.textColor}
                strokeWidth={2.5}
                style={{ opacity: 0.9 }}
              />
              <span
                style={{
                  fontSize: 9.5,
                  fontWeight: 800,
                  color: companyInfo.textColor,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                {companyInfo.name}
              </span>
            </div>
          </div>
          <div style={{ fontSize: 11.5, color: "#64748b", fontWeight: 500 }}>
            {hrRole}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            padding: "4px 10px",
            borderRadius: 8,
            background: "#F0FDF4",
            border: "1px solid #BBF7D0",
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#16a34a",
              boxShadow: "0 0 0 2px rgba(22,163,74,0.2)"
            }}
          />
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: "#16a34a",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Verified
          </span>
        </div>
      </div>
      
      <div style={{ position: "relative" }}>
        <p
          style={{
            fontSize: 13.5,
            color: "#334155",
            lineHeight: 1.6,
            margin: 0,
            fontStyle: "italic",
            letterSpacing: "-0.01em",
          }}
        >
          "{hrQuote}"
        </p>
      </div>
    </motion.div>
  );
}
`;

if (!code.includes("HRQuoteBubble")) {
  const leftColStart = code.lastIndexOf("function LeftCVColumn");
  code =
    code.substring(0, leftColStart) +
    hrBubbleCode +
    "\n" +
    code.substring(leftColStart);
}

// 3. Inject it into LeftCVColumn's wrapper
const searchStr = `
      <div
        className="cv-left-scroll"
        style={{
          width: "50%",`;

code = code.replace(
  `
      <div
        className="cv-left-scroll"
        style={{
          width: "50%",`,
  `
      <div style={{ position: "relative", width: "50%", display: "flex", flexDirection: "column" }}>
      <div
        className="cv-left-scroll"
        style={{
          flex: 1,
          width: "100%",`,
);

// Let's find the end of LeftCVColumn
const leftCVReturnEndStr = `          </div>
        </div>
      </div>
    </>
  );
}`;
const replaceStr = `          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        <HRQuoteBubble key={activeSection+level} section={activeSection} level={level} selectedRole={selectedRole} />
      </AnimatePresence>
      </div>
    </>
  );
}`;

code = code.replace(leftCVReturnEndStr, replaceStr);

fs.writeFileSync(file, code);
console.log("Done");
