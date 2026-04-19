import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header" data-animate>
          <span className="section-tag">03 / Experience</span>
          <h2 className="section-title">My Journey</h2>
        </div>
        <div className="timeline">

          <div className="timeline-item" data-animate>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3 className="timeline-role">Co-Founder</h3>
              </div>
              <p className="timeline-org">🚀 Bhitti Bhai</p>
              <p className="timeline-desc">
                Bhitti Bhai is a specialized platform delivering technical structural insights and engineering education to empower the engineering community of Bangladesh. Leading content strategy, AI integration, and team operations to scale a high-impact digital learning platform.
              </p>
              <div className="timeline-tags">
                <span>AI Integration</span>
                <span>Leadership</span>
                <span>Digital Strategy</span>
              </div>
            </div>
          </div>

          <div className="timeline-item" data-animate>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3 className="timeline-role">IT Secretary</h3>
              </div>
              <p className="timeline-org">🏛️ ACEE, SUST</p>
              <p className="timeline-desc">
                Led technical support for departmental events, ensuring smooth execution and efficient digital operations through effective coordination, system management, and real-time troubleshooting.
              </p>
              <div className="timeline-tags">
                <span>IT Management</span>
                <span>Digital Workflows</span>
                <span>Real-time Troubleshooting</span>
              </div>
            </div>
          </div>

          <div className="timeline-item" data-animate>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3 className="timeline-role">Assistant IT Secretary</h3>
              </div>
              <p className="timeline-org">🏛️ ACEE, SUST</p>
              <p className="timeline-desc">
                Enhanced organizational technical support and strengthened digital presence through optimized systems and effective content management.
              </p>
              <div className="timeline-tags">
                <span>Technical Support</span>
                <span>Content Management</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
