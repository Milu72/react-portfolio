import React from 'react';
import { GraduationCap, Building2, Cpu, Mail } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header" data-animate>
          <span className="section-tag">01 / About</span>
          <h2 className="section-title">Who I Am</h2>
        </div>
        <div className="about-grid">
          <div className="about-text" data-animate>
            <p className="about-lead">
              I am a Civil and Environmental Engineering student at SUST, dedicated to bridging the gap between traditional engineering and modern technology.
            </p>
            <p>
              As the Co-Founder of <span className="highlight">Bhitti Bhai</span>, I develop automation tools and educational content designed to empower the next generation of engineers.
            </p>
            <p>
              Drawing on my leadership experience as the former IT Secretary of ACEE. My mission is to help young professionals move beyond manual tasks and master the computational tools of tomorrow.
            </p>
            <div className="about-stats">
              <div className="stat-card">
                <span className="stat-num">AI</span>
                <span className="stat-label">Integration</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">Data</span>
                <span className="stat-label">Driven Solutions</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">Tech</span>
                <span className="stat-label">Automation</span>
              </div>
            </div>
          </div>
          
          <div className="about-card" data-animate>
            <div className="about-card-inner">
              <div className="about-avatar">
                <div className="avatar-ring"></div>
                <div className="avatar-inner">
                  <span className="avatar-initials">OIM</span>
                </div>
              </div>
              <div className="about-info-list">
                <div className="info-row">
                  <span className="info-icon"><GraduationCap size={20} /></span>
                  <div>
                    <span className="info-label">University</span>
                    <span className="info-value">Shahjalal University of Science and Technology</span>
                  </div>
                </div>
                <div className="info-row">
                  <span className="info-icon"><Building2 size={20} /></span>
                  <div>
                    <span className="info-label">Field</span>
                    <span className="info-value">Civil and Environmental Engineering</span>
                  </div>
                </div>
                <div className="info-row">
                  <span className="info-icon"><Cpu size={20} /></span>
                  <div>
                    <span className="info-label">Focus</span>
                    <span className="info-value">AI | ML | Automation</span>
                  </div>
                </div>
                <div className="info-row">
                  <span className="info-icon"><Mail size={20} /></span>
                  <div>
                    <span className="info-label">Email</span>
                    <span className="info-value">zxmilu729@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
