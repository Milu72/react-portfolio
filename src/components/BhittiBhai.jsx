import React from 'react';

const BhittiBhai = () => {
  return (
    <section id="bhitti-bhai" className="section">
      <div className="container">
        <div className="section-header" data-animate>
          <span className="section-tag">04 / Initiative</span>
          <h2 className="section-title">Bhitti Bhai</h2>
          <p className="section-subtitle">Bridging theory and real-world practice by integrating modern technology</p>
        </div>

        <div className="bhitti-bhai-container" data-animate style={{
          background: 'var(--bg-card-solid)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: 'minmax(300px, 1fr) 2fr',
          gap: '2rem',
          boxShadow: 'var(--shadow-card)'
        }}>

          <div className="bb-logo-wrap" style={{
            background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.1) 0%, rgba(56, 189, 248, 0.05) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '3rem',
            borderRight: '1px solid var(--border)'
          }}>
            <img
              src="/Bhitti Bhai Logo.png"
              alt="Bhitti Bhai Logo"
              style={{
                maxWidth: '220px',
                width: '100%',
                filter: 'drop-shadow(0 0 20px rgba(0, 229, 255, 0.2))',
                transform: 'scale(1)',
                transition: 'transform 0.3s ease'
              }}
              onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>

          <div className="bb-content" style={{ padding: '3rem 3rem 3rem 0' }}>
            <h3 style={{
              fontFamily: 'var(--font-head)',
              fontSize: '1.8rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}>Empowering the Next Generation</h3>
            <p style={{
              color: 'var(--text-light)',
              fontSize: '1rem',
              lineHeight: 1.8,
              marginBottom: '1.5rem'
            }}>
              Bhitti Bhai is a civil engineering–focused platform empowering the next generation of engineers in Bangladesh through BNBC-compliant digital tools and practical learning resources.
            </p>
            <p style={{
              color: 'var(--text-light)',
              fontSize: '1rem',
              lineHeight: 1.8,
              marginBottom: '2rem'
            }}>
              We bridge theory and real-world practice by integrating modern technology, AI, and automation into engineering workflows. Our mission is to simplify complex concepts and build smarter, more efficient engineers.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="https://www.bhittibhai.com/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'inline-flex' }}>
                Visit Bhitti Bhai Platform
              </a>
              <a href="https://www.facebook.com/share/1KLoWAq1Ec/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'inline-flex' }}>
                Facebook Page
              </a>
            </div>
          </div>

        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        @media (max-width: 768px) {
          .bhitti-bhai-container {
            grid-template-columns: 1fr !important;
          }
          .bb-logo-wrap {
            border-right: none !important;
            border-bottom: 1px solid var(--border);
            padding: 2rem !important;
          }
          .bb-content {
            padding: 2rem !important;
          }
        }
      `}} />
    </section>
  );
};

export default BhittiBhai;
