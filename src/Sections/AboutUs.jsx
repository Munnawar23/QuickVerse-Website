import { useGSAP } from '@gsap/react'
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function AboutUs() {
  const gsapRef = useRef()
  const scrollRef = useRef()
  useGSAP(()=>{
    gsap.from(gsapRef.current,{
      y:300,
      duration: 1,
      delay: 0.3,
      opacity: 0,
      scrollTrigger:{
        trigger: gsapRef.current,
        start: "top 130%",
        end: "60%",
      }
    })
    gsap.from(scrollRef.current.querySelectorAll('h1'),{
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      delay: 0.5,
      scrollTrigger:{
        trigger: gsapRef.current,
        start: "top 70%",
        end: "60%",
      }
    })
  })
  return (
    <div className='h-screen w-full  text-[#000] bg-[#FFFFED]'>
      <div ref={gsapRef} className='wrapper'>
        <div className="logos flex justify-center p-10 h-10 ">
          <h2 className='p-4 text-4xl font-normal flex justify-center items-center'>About QuickVerse</h2>
        </div>


        <p className='paragraph text-5xl font-light p-16'>
        QuickVerse is a hyper-local delivery startup serving India's premium campuses with advanced drone technology. We offer fast and reliable delivery of groceries, meals, books, and more. Our mission is to enhance campus life through swift, efficient, and eco-friendly delivery solutions tailored to each community's unique needs. We are also proud partners with Amazon, bringing an expanded range of products and services directly to our customers.
        </p>
      </div>
      <div ref={scrollRef} className="flex justify-between items-end mx-20">
        <h1 className='text-6xl'>20,000+ <br /> <p className='text-xl flex px-4'>Orders delivered</p> </h1>
        <h1 className='text-6xl'>120+<br /> <p className='text-xl flex px-4'>Vendors</p> </h1>
        <h1 className='text-6xl'>15+ <br /> <p className='text-xl flex px-4'>Total Campuses</p> </h1>
      </div>
    </div>
  )
}

export default AboutUs;
