"use client";
import React from 'react';
import { useEffect } from 'react';

export default function Scan() {
const backgroundImageUrl = "/bacteria_wp.jpg"; // Replace with the URL of your background image

const divStyle = {
    height: "100vh",
    margin: 0,
    padding: 0,
};

const overlayStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    filter: "blur(3px) brightness(0.7)", // Adding blur and brightness to the background image
    backgroundSize: "cover",
    backgroundPosition: "center",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    margin: 0,
    padding: 0,
    zIndex: -1,
    transform: "scale(1.1)",
};

useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
    document.body.style.overflow = 'visible';
    };
}, []);

return (
    <div className="" style={divStyle}>
    <nav className="p-4 text-gray-200">
        <div className="flex justify-between items-center"></div>
        <div className="flex items-center pl-8">
        {/* Replace the image with your actual image */}
        <img
            src="/petrilab.jpg"
            alt="PL"
            width={50}
            height={50}
        />
        <i className="text-2xl fas fa-campground"></i>
        <h1 className="font-serif tracking-wide font-bold text-2xl pl-4 italic">PETRILAB</h1>
        </div>

        <div className="md:hidden block top-4 right-8 fixed">
        <button aria-label="navigation" type="button" className="md:hidden text-gray-200 transition duration-300 focus:outline-none focus:text-white hover:text-white">
            <i className="fas fa-bars text-3xl" id="bars"></i>
        </button>
        </div>
    </nav>
    
    <div className="text-white text-center relative z-10">
    <h3 className="text-5xl mt-16">Start Scanning <span className="bg-gradient-to-r from-blue-300 via-blue-500 to-blue-200 text-transparent bg-clip-text bg-300% animate-gradient"> now</span></h3>
        
        <div className="border-white p-4 rounded-3xl mt-[8rem] mx-auto border-dashed border-2" style={{ maxWidth: "400px" }}>
            <p className="mb-5 text-xl">Click the button to upload your Petri Dish photo or drag it inside the box</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-20 mt-3 rounded text-md">Upload Photo</button>
        </div>
    </div>


    <div className="absolute top-0 left-0 w-full h-full" style={overlayStyle}></div>
    </div>
);
}
