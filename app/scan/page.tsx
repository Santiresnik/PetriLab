import React from 'react';

export default function Scan() {
  return (
    <div>
    <nav className="p-4 text-gray-200">
    <div className="flex justify-between items-center"></div>
    <div className="flex items-center pl-8">
        <i className="text-2xl fas fa-campground"></i>
        <h1 className="font-serif tracking-wide font-bold text-xl pl-4">PetriLab</h1>
    </div>

    <div className="md:hidden block top-4 right-8 fixed">
        <button aria-label="navigation" type="button" className="md:hidden text-gray-200 transition duration-300 focus:outline-none focus:text-white hover:text-white">
        <i className="fas fa-bars text-3xl" id="bars"></i>
        </button>
    </div>
    </nav>

    <div>
    <h3>Start Scanning</h3>
    <p>Click the button to upload your Petri Dish photo or drag it inside the box</p>
    <button>Upload Photo</button>
    </div>
</div>
);
}
