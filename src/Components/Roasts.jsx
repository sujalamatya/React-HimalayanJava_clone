import coffee1 from '../assets/coffee1.png'
import coffee2 from '../assets/coffee2.png'
import coffee3 from '../assets/coffee3.png'
import coffee4 from '../assets/coffee4.png'
import React, { useRef } from 'react';
import { motion , useInView} from 'framer-motion';

export default function () {
    const ref = useRef();
    const isInView = useInView(ref);
  return (
    <div className='w-screen h-[19em] bg-green-950 items-end'>
        <div className='flex justify-around'>
            <motion.div ref={ref} initial={{opacity:0,y:+30}} animate={isInView && {opacity:1,y:0}} transition={{ duration: 1 }}>
                <img src={coffee1} alt="coffieOne" />
            </motion.div>
            <motion.div ref={ref} initial={{opacity:0,y:+30}} animate={isInView && {opacity:1,y:0}} transition={{ duration: 1.4 }}>
                <img src={coffee2} alt="coffieTwo" />
            </motion.div>
            <motion.div ref={ref} initial={{opacity:0,y:+30}} animate={isInView && {opacity:1,y:0}} transition={{ duration: 1.8 }}>
                <img src={coffee3} alt="coffieThree" />
            </motion.div>
            <motion.div ref={ref} initial={{opacity:0,y:+30}} animate={isInView && {opacity:1,y:0}} transition={{ duration: 2 }}>
                <img src={coffee4} alt="coffieFour" />
            </motion.div>
        </div>
        <div className='flex justify-around text-white mt-6'>
            <motion.div ref={ref} initial={{opacity:0,y:+30}} animate={isInView && {opacity:1,y:0}} transition={{ duration: 1.4 }}><h1>THAMEL ROAST</h1></motion.div>
            <motion.div ref={ref} initial={{opacity:0,y:+30}} animate={isInView && {opacity:1,y:0}} transition={{ duration: 1 }}><h1>EVEREST ROAST</h1></motion.div>
            <motion.div ref={ref} initial={{opacity:0,y:+30}} animate={isInView && {opacity:1,y:0}} transition={{ duration: 1.8 }}><h1>ESPRESSO ROAST</h1></motion.div>
            <motion.div ref={ref} initial={{opacity:0,y:+30}} animate={isInView && {opacity:1,y:0}} transition={{ duration: 2 }}><h1>MEDIUM ROAST</h1></motion.div>
        </div>
    </div>
  )
}
