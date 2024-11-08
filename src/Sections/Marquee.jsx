import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-10  bg-[#000]'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex  overflow-hidden whitespace-nowrap text-white">
            <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear",duration: 10}} className='text-[30vh] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase mb-10 pt-10 font-semibold pr-20 '>EXPERIENCE OUR APP NOW</motion.h1>
            <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear",duration: 10}} className='text-[30vh] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase mb-10 pt-10 font-semibold pr-20 '>EXPERIENCE OUR APP NOW</motion.h1>
        </div>
    </div>
  )
}

export default Marquee