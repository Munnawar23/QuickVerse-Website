import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import AboutUs from './Sections/AboutUs';
import Services from './Sections/Services';
import ExperienceApp from './Sections/ExperienceApp';
import ContactUs from './Sections/ContactUs';
import Marquee from './Sections/Marquee';
import Home from './Sections/Home';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.7, 
      easing: (t) => t * (2 - t), 
      smoothWheel: true, 
      smoothTouch: false, 
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className='main'>
      <Home />
      <AboutUs />
      <Services />
      <Marquee />
      <ExperienceApp />
      <ContactUs />
    </div>
  );
}

export default App;
