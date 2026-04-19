import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#hero" className="nav-logo">
          OI<span className="accent">M</span>
        </a>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#skills" className="nav-link" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#experience" className="nav-link" onClick={() => setMenuOpen(false)}>Experience</a></li>
          <li><a href="#bhitti-bhai" className="nav-link" onClick={() => setMenuOpen(false)}>Bhitti Bhai</a></li>
        </ul>
        <a href="#contact" className="nav-cta btn btn-glow">Let's Talk</a>
        
        <button 
          className="hamburger" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ background: 'transparent', border: 'none', color: 'var(--text-light)', cursor: 'pointer' }}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
