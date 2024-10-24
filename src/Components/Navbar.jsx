import Logo from '../assets/java-newlogo.png'
import React from 'react'
export default function Navbar() {
    return (
        <nav className="font-sans fixed w-full top-0 z-50 p-1 px-8 bg-transparent overflow-auto border-b border-solid border-gray-300">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <ul className="flex justify-around items-center list-none mt-4 p-0 font-medium">
            {/* Logo Item */}
            <li className="mt-0">
                <img 
                    src={Logo} 
                    alt="logo" 
                    className="h-14 w-35" // Adjust the height as needed
                />
            </li>
            
            {/* Navigation Items */}
            <li className=" py-2 cursor-pointer relative group">
                    <span className="relative text-gray-800 hover:text-black">Home</span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </li>
            <li className=" py-2 cursor-pointer relative group">
                    <span className="relative text-gray-800 hover:text-black">About Us</span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </li>
                <li className=" py-2 cursor-pointer relative group">
                    <span className="relative text-gray-800 hover:text-black">Services</span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </li>
                <li className=" py-2 cursor-pointer relative group">
                    <span className="relative text-gray-800 hover:text-black">Locations</span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </li>
                <li className=" py-2 cursor-pointer relative group">
                    <span className="relative text-gray-800 hover:text-black">Franchise</span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </li>
                <li className=" py-2 cursor-pointer relative group">
                    <span className="relative text-gray-800 hover:text-black">Loyalty App</span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </li>
                <li className="mr-20 py-2 cursor-pointer relative group">
                    <span className="relative text-gray-800 hover:text-black">Career in Java</span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </li>


            {/* Search Icon */}
            <li>
                <i className="fa fa-fw fa-search cursor-pointer text-gray-800 hover:text-black"></i>
            </li>
        </ul>
    </nav>
        
    )
}
