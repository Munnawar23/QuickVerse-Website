import React, { useRef } from 'react';
import mainVideo from '../assets/hero.mp4'; 
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import logo from '../assets/logo.png'
function Home() {
  const logoRef = useRef()
  const nameRef = useRef()
  const headingRef = useRef()
  useGSAP(() => {
    const tl = gsap.timeline()
    tl.from(logoRef.current, {
      y: -100,
      duration: 0.5,
      delay: 0.2,
      opacity: 0,
    })
    tl.from(nameRef.current, {
      y: -100,
      duration: 0.5,
      delay: 0.2,
      opacity: 0,
    })
    tl.from(headingRef.current, {
      y: 100,
      duration: 1,
      delay: 0.1,
      opacity: 0,
    })
  });
  return (
    <div className='wrapper bg-white h-screen w-full relative'>
      <div className="navbar absolute top-0 left-0 w-full z-10 flex justify-between items-center p-10">
        <img ref={logoRef} src={logo} alt="" />
      <a href="mailto:support@quickverse.in"><h3 ref={nameRef} className='text-4xl hover:underline mb-6 text-black'>Contact Us</h3></a>
      </div>
      <div className="video h-full">
        <video
          className="w-full h-full object-cover"
          src={mainVideo}
          autoPlay
          loop
          muted
          playsInline
        />
          <h3 ref={headingRef} className="absolute bottom-10 w-full text-center text-4xl font-semibold text-black">
          India’s First Hyper Local Delivery Startup for Educational Campuses
        </h3>
      </div>
    </div>
  );
}

export default Home;
