import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-left">
          <span className="nav-logo">
            OI<span className="accent">M</span>
          </span>
          <p>Engineer · Founder · ML Enthusiast<br />AI Integration · Automation Tools</p>
        </div>
        <div className="footer-center">
          <div className="availability-badge">
            <span className="live-dot"></span>
            <span>Available for Tech Collaborations</span>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-copy">© {new Date().getFullYear()} Obaidul Islam Milu</p>
          <p className="footer-copy muted">Built with precision & passion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
