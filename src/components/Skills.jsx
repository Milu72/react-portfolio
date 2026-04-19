import React from 'react';
import { PenTool, Terminal, LineChart, BrainCircuit, Map } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header" data-animate>
          <span className="section-tag">02 / Skills</span>
          <h2 className="section-title">My Expertise</h2>
        </div>
        <div className="skills-grid">

          <div className="skill-category" data-animate>
            <div className="skill-cat-header">
              <span className="skill-cat-icon"><PenTool className="accent" size={24} /></span>
              <h3>Engineering Tools</h3>
            </div>
            <div className="skill-tags">
              <span className="skill-tag">AutoCAD</span>
              <span className="skill-tag">ETABS</span>
              <span className="skill-tag">MS Excel</span>
            </div>
          </div>

          <div className="skill-category" data-animate>
            <div className="skill-cat-header">
              <span className="skill-cat-icon"><Terminal className="accent" size={24} /></span>
              <h3>Programming</h3>
            </div>
            <div className="skill-tags">
              <span className="skill-tag skill-tag--accent">Python</span>
              <span className="skill-tag">NumPy</span>
              <span className="skill-tag">Pandas</span>
            </div>
          </div>

          <div className="skill-category" data-animate>
            <div className="skill-cat-header">
              <span className="skill-cat-icon"><LineChart className="accent" size={24} /></span>
              <h3>Data Science</h3>
            </div>
            <div className="skill-tags">
              <span className="skill-tag">Data Analysis</span>
              <span className="skill-tag">Data Visualization</span>
              <span className="skill-tag">Seaborn</span>
            </div>
          </div>

          <div className="skill-category" data-animate>
            <div className="skill-cat-header">
              <span className="skill-cat-icon"><BrainCircuit className="accent" size={24} /></span>
              <h3>Machine Learning</h3>
            </div>
            <div className="skill-tags">
              <span className="skill-tag skill-tag--accent">Scikit-learn</span>
              <span className="skill-tag skill-tag--accent">TensorFlow</span>
              <span className="skill-tag">Model Development</span>
              <span className="skill-tag">Predictive Modeling</span>
            </div>
          </div>

          <div className="skill-category" data-animate>
            <div className="skill-cat-header">
              <span className="skill-cat-icon"><Map className="accent" size={24} /></span>
              <h3>GIS & Spatial</h3>
            </div>
            <div className="skill-tags">
              <span className="skill-tag skill-tag--accent">ArcGIS Pro</span>
              <span className="skill-tag">Spatial Analysis</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
