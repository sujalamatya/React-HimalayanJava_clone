import TopImg from '../assets/topimg.png';
import Crop from '../assets/crop.jpg';
import React, { useRef } from 'react';
import { motion , useInView} from 'framer-motion';

export default function TopImage() {
    const ref = useRef();
    const isInView = useInView(ref);
  return (<>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
     <div className="top-0" style={{
        backgroundImage: `url(${TopImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '600px',
        width: '100%',
        position: 'relative',
        zIndex: 0
     }}>
    </div>
    <div className="flex items-center justify-center  mt-10">
    <div className="self-stretch text-center w-[850px] h-auto justify-normal">
        <p className="font-sans font-extralight text-xl">
            In 1999, we started off as the first specialty coffee shop in Nepal. Over the years, we have diversified from a small coffee shop to an enterprise franchising the Nepali Coffee brand, nationally and internationally.
        </p>
        <button className="p-3 mt-5 border border-solid border-black transition-all duration-300 ease-in-out hover:text-white  hover:bg-yellow-600">  Learn More    <i className="fa fa-arrow-right"></i></button>
    </div>
    
    </div>
    <div className="grid gap-4 grid-cols-2 grid-rows-1 top-0 mt-[50px]">
        <motion.div ref={ref} initial={{opacity:0,x:-200}} animate={isInView && {opacity:1,x:0}} transition={{ duration: 1 }}  className="ml-[100px]"><img src={Crop} alt="coffie crop" /></motion.div>
        <motion.div ref={ref} initial={{opacity:0,x:+200}} animate={isInView && {opacity:1,x:0}} transition={{ duration: 1 }}  className="self-center mr-[150px] ml-11">
            <p>COFFIE FARMING</p>
            <h1 className="font-quicksand font-extrabold text-4xl">The Journey from<br></br> Crop to Cup</h1>
            <p className="mt-5 font-roboto">Grown in the ideal Himalayan air, our coffee beans are roasted to perfection and sent off to all our outlets to deliver the best coffee experience.</p>
            <button className="p-3 mt-5 border border-solid border-black transition-all duration-300 ease-in-out hover:text-white hover:bg-yellow-600">  Learn More    <i className="fa fa-arrow-right"></i></button>
         </motion.div>
    </div>
    </> 
  )
}
