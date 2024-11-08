import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const images = [
  '/images/1.png',
  '/images/2.png',
  '/images/3.png',
  '/images/4.png',
  '/images/5.png',
  '/images/6.png',
]

function ExperienceApp() {
  useGSAP(() => {
    gsap.utils.toArray('.card').forEach(card => {
      gsap.to(card, {
        scale: 0.8,
        opacity: 0,
        scrollTrigger: {
          trigger: card,
          start: "top 15%",
          end: "bottom 15%",
          scrub: true
        }
      })
    });

    gsap.fromTo('.intro-text', {
      opacity: 0,
      y: 100,
    }, {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: '.intro-text',
        start: "top 100%",
        end: "top 50%",
        toggleActions: "play none none none"
      }
    });
  });

  return (
    <main className='w-full text-white bg-black flex flex-col gap-5 items-center py-[5vh]'>
      {/* Cards */}
      {images.map((image, index) => {
        return (
          <div key={index} id={index} className="card sticky top-[5vh] w-[27vw] items-center flex flex-col gap-5 px-[30px] py-[10vh] rounded-lg bg-black">
            <img className='w-[280px]' src={image} alt={`Image ${index + 1}`} />
          </div>
        )
      })}
     <div className="intro-text text-3xl font-light text-center mb-10">
        <p>We are available on both ios and android. Download our app now</p>
      </div>
    </main>
  )
}

export default ExperienceApp;
