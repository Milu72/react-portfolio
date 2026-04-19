import React, { useEffect, useState } from 'react';
import { Sparkles, Cpu, Target, ArrowRight, ArrowUpRight, Code, Settings, Brain } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="modern-hero">
      {/* Background Grid */}
      <div className="hero-bg-grid"></div>

      <div className="container hero-container">
        
        {/* Left Content */}
        <div className="hero-content-left reveal-up">
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-title">
            <span className="text-white">Obaidul Islam</span><br/>
            <span className="gradient-text-name">Milu</span>
          </h1>
          <div className="title-underline" style={{ marginBottom: '1.5rem' }}></div>
          
          <div className="hero-badge" style={{ marginBottom: '2.5rem' }}>
            <span className="live-dot"></span> 
            ENGINEER • FOUNDER • ML ENTHUSIAST
          </div>
          
          <div className="hero-cta-group">
            <a href="#about" className="btn-explore">
              Explore My Work 
              <span className="arrow-circle"><ArrowUpRight size={18} strokeWidth={2.5} /></span>
            </a>
            <a href="#contact" className="btn-contact">
              Get in Touch 
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="hero-content-right reveal-up" style={{ '--delay': '0.2s' }}>
            <div className="hero-image-wrapper">
                
                {/* Outer Orbit Path */}
                <div className="orbit-path">
                     <span className="orbit-dot dot-1"></span>
                     <span className="orbit-dot dot-2"></span>
                     <span className="orbit-dot dot-3"></span>
                     <span className="orbit-dot dot-4"></span>
                </div>

                {/* Floating Glassmorphic Icons */}
                <div className="floating-icon icon-1"><Code size={24} /></div>
                <div className="floating-icon icon-2"><span className="ai-text">AI</span></div>
                <div className="floating-icon icon-3"><Settings size={24} /></div>
                <div className="floating-icon icon-4"><Brain size={24} /></div>

                {/* Center Profile Image with Spinning Gradient Border */}
                <div className="profile-image-container">
                    <img src="/Milu.JPG" alt="Obaidul Islam Milu" />
                </div>

            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
