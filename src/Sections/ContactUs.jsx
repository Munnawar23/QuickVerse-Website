import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Playstore from '../assets/playstore.png';
import Appstore from '../assets/appstore.png';

gsap.registerPlugin(ScrollTrigger);

function ContactUs() {
  const gsapRef = useRef()
  useGSAP(()=>{
    gsap.from(gsapRef.current,{
      y:300,
      duration: 0.5,
      delay: 0.4,
      opacity: 0,
      scrollTrigger:{
        trigger: gsapRef.current,
        start: "top 130%",
        end: "top 30%",
        toggleActions: "play reverse play reverse",
      }
    })
  })
  return (
    <main className=' bg-[#000]'>
       <div ref={gsapRef} className='w-full text-white flex gap-5 h-screen  p-20'>
        <div className="w-full flex h-full flex-col justify-between ">
            <div  className="heading">
                <h1 className='text-[5vw] font-normal leading-none -mb-2'>QuickVerse</h1>
                <h1 className='text-[5vw] font-normal  leading-none -mb-4'>Private Limited</h1>
            </div>
            <div className="img-container flex items-center pt-16 gap-16 ">
              <a href="">
                <img src={Playstore} alt="" width="250" height="250" />
              </a>
              <a href="">
                <img src={Appstore} alt="" width="290" height="250" />
              </a>
            </div>
        </div>
        <div className="w-1/2">
        <h1 className='text-[4vw] font-normal uppercase leading-none -mb-4'>Contact Us</h1>
        <div className="dets font-[Neue_Montreal'] mt-10">
          <h1 className='text-2xl underline mb-4'>Social links:</h1>
            <a className='block mb-1 hover:underline text-xl font-light' href="https://m.facebook.com/profile.php?id=100030209521059&name=xhp_nt__fb__action__open_user">Facebook</a>
            <a className='block mb-1 hover:underline text-xl font-light' href="https://www.instagram.com/__munwwar__/?next=%2F">Instagram</a>
            <a className='block mb-1 hover:underline text-xl font-light' href="https://www.linkedin.com/in/munnawar-hussain-aa544b227/">Linkedln</a>
            <a className='block mb-1 hover:underline text-xl font-light' href="https://github.com/Munnawar23">Github</a>
            <h1 className='text-2xl underline mt-8 mb-4'>Mail:</h1>
            <h1 className='block mb-1 hover:underline text-xl font-light' href="">support@quickverse.in</h1>
            <h1 className='text-2xl underline mt-8 mb-4'>Adress:</h1>
            <a className='block mb-1 hover:underline text-xl font-light' href="">Maharastra, India</a>
            <h1 className='text-2xl underline mt-8 mb-4'>Phone Number</h1>
            <h1 className='text-2xl  mb-4'>+91 93732 64722</h1>
        </div>
        </div>
    </div>
    </main>
   
  )
}

export default ContactUs