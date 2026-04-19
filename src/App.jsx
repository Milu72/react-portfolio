import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import BhittiBhai from './components/BhittiBhai';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible', 'in-view');
        }
      });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('[data-animate], .reveal-up, .reveal-fade');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <About />
        <Skills />
        <Experience />
        <BhittiBhai />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
