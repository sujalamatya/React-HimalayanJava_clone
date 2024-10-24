import React from 'react'
import product from '../assets/product-jaba.jpg'
import javaCup from '../assets/javacup.jpg'
import coffeeico from '../assets/coffee-ico.jpg'
import { motion , useInView} from 'framer-motion';

export default function Thrid() {
  return (
    <>
    <div className="grid gap-4 grid-cols-3 grid-rows-1 top-0 mt-[100px]">
        <div className='ml-[100px] place-self-center'>
            <h1 className='text-4xl font-bold'>Buy Online</h1>
            <p className='mt-5'>CURATED SELECTION OF COFFEE,<br></br>DELIVERED TO YOUR DOORSTEP</p>
            <p className='mt-6'>After we harvest coffee from our farm, our <br></br>experts process them with the greatest care;<br></br>subsequently, they are immediately packaged,<br></br>preserving freshness, and sent off to all our<br></br>outlets.</p>
            <button className='mt-6 p-3 border border-solid border-orange bg-orange-500 text-white'>Buy Online</button>
        </div>
        <div>
            <img src={product} alt="product" className='w-[950px] h-[500px] ml-[100px]'/>
        </div>
        <div className="grid gap-4 grid-cols-1 grid-rows-2 top-0 place-self-end mr-[100px]">
            <div>
                <img src={javaCup} alt="javacup" className='w-[200px] h-[219px]'/>
            </div>
            <div>
                <h1 className='font-bold'>Why Java Coffee?</h1>
                <div className='flex flex-col gap-2 top-0 mt-5'>
                    <div className='flex gap-1'><img src={coffeeico} alt="icon" className='w-[32px] h-[32px]'/><p className='ml-0'>Himalayan Java<br></br>offers its customers<br></br>the best-tasting<br></br>coffee beverages in<br></br>the country.</p></div>
                    <div className='flex gap-1'><img src={coffeeico} alt="icon" className='w-[32px] h-[32px]' /><p>We have achieved<br></br>this by using high-<br></br>quality ingredients.</p></div>
                    
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
