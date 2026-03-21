const fs = require('fs');
const filePath = 'landing-page-repo/app/sfp2026/cv-builder/src/app/components/Screen3Workspace.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Fix CSS
content = content.replace(
    /\.speech-bubble-desktop \{\s*display:\s*none\s*!important;\s*position:\s*absolute;/,
    '.speech-bubble-desktop { display: flex !important; position: absolute;'
);

const bubble_jsx = `{children}

      <AnimatePresence>
        {isActive && bubbleData && (
          <>
            {/* Desktop floating bubble */}
            <motion.div
              initial={{ opacity: 0, x: -10, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="speech-bubble-desktop"
              style={{ width: 340, padding: 16 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <img
                    src={
                      bubbleData.hrAvatar === 'man'
                        ? 'https://ui-avatars.com/api/?name=HR+Man&background=E0E7FF&color=0E56FA'
                        : 'https://ui-avatars.com/api/?name=HR+Woman&background=FCE7F3&color=DB2777'
                    }
                    alt="HR Avatar"
                    style={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#0F172A' }}>
                      {bubbleData.hrName}
                    </span>
                    <span
                      style={{
                        padding: '2px 6px',
                        borderRadius: '4px',
                        fontSize: '9px',
                        fontWeight: 700,
                        backgroundColor: bubbleData.companyInfo.color,
                        color: bubbleData.companyInfo.textColor || 'white',
                      }}
                    >
                      {bubbleData.companyInfo.name}
                    </span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
                  <span style={{ fontSize: '10px', fontWeight: 800, color: '#22c55e', letterSpacing: '0.05em' }}>VERIFIED</span>
                </div>
              </div>
              <p
                style={{
                  fontSize: '13px',
                  color: '#475569',
                  fontStyle: 'italic',
                  lineHeight: 1.5,
                  margin: 0,
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                "{bubbleData.hrQuote}"
              </p>
            </motion.div>

            {/* Mobile bottom sheet */}
            <motion.div
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="speech-bubble-mobile"
            >
               <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <img
                    src={
                      bubbleData.hrAvatar === 'man'
                        ? 'https://ui-avatars.com/api/?name=HR+Man&background=E0E7FF&color=0E56FA'
                        : 'https://ui-avatars.com/api/?name=HR+Woman&background=FCE7F3&color=DB2777'
                    }
                    alt="HR Avatar"
                    style={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#0F172A' }}>
                      {bubbleData.hrName}
                    </span>
                    <span
                      style={{
                        padding: '2px 6px',
                        borderRadius: '4px',
                        fontSize: '9px',
                        fontWeight: 700,
                        backgroundColor: bubbleData.companyInfo.color,
                        color: bubbleData.companyInfo.textColor || 'white',
                      }}
                    >
                      {bubbleData.companyInfo.name}
                    </span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
                  <span style={{ fontSize: '10px', fontWeight: 800, color: '#22c55e', letterSpacing: '0.05em' }}>VERIFIED</span>
                </div>
              </div>
              <p
                style={{
                  fontSize: '13px',
                  color: '#475569',
                  fontStyle: 'italic',
                  lineHeight: 1.5,
                  margin: 0,
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                "{bubbleData.hrQuote}"
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>`;

content = content.replace('{children}', bubble_jsx);

fs.writeFileSync(filePath, content);
console.log('Restored beautiful bubbles!');
