import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube, faDiscord, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isScrolled
          ? 'backdrop-blur-sm bg-gray-800/60 hover:bg-gray-800/75 text-slate-200 fixed py-3 w-full z-10 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)]'
          : 'bg-[#f4f4f5] text-black transition-all py-2 duration-300 shadow-none'
      }`}
    >
      <div className={`${
        isScrolled
        ? 'absolute bottom-0 left-0 w-full h-[1px] bg-gray-500/40 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)]'
        : 'transition-all duration-300 shadow-none'}`}></div>

      <nav className="flex items-center justify-between text-base xl:text-lg top-0 font-normal relative">
        <div className="mx-4 flex items-center">
          <img
            src="https://cdn.icon-icons.com/icons2/2379/PNG/512/petri_dish_experimentation_biology_education_petri_dish_icon_143934.png"
            alt="PetriLab Logo"
            className="h-8 w-8 mr-2"
          />
          <a href="#" className="font-bold text-lg">
            PetriLab
          </a>
        </div>
        <div className="mx-4 flex-grow text-center"></div>
        <div className="mx-4 border-2 border-gray rounded-[0.25rem] hover:bg-[#f1f0ee]">
          <Link href="/login" className="font-semibold text-base p-3 pb-1">
            Log In
          </Link>
        </div>
        <div className="mx-4 bg-black border-2 border-zinc-900 rounded-[0.25rem] hover:bg-gray-800">
          <Link href="/signup" className="font-semibold text-orange-50 p-2 pb-1 text-base">
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
};

const Sections: React.FC = () => {
return (
  <section className="flex-1 mt-2 pb-12 flex items-center justify-center">  
  <div className="container mx-auto text-left items-center justify-center">
    <div className="w-1/2 bg-gray-200 rounded-lg pt-8 pb-8 pr-10 m-auto text-center align-middle">
      <h1 className="text-5xl font-semibold mb-2">Welcome to PetriLab</h1>
      <p className="text-gray-600 mb-2">
        Unlock the secrets of science in the comfort of your lab.
      </p>
      <Link href="/scan">
      <button className="mt-2 px-8 py-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 shadow-md">
          Scan Now
      </button>
      </Link>
      <p className="mt-4 text-gray-600 text-sm">
        Start your journey with PetriLab and explore and analyze your dishes.
      </p>
    </div>

      <hr className="border-t-2 border-gray-400 mt-8 mb-8 mx-auto w-16" />

      <h2 className="text-3xl font-semibold my-8 text-center">Features</h2>
      <div className="flex flex-col md:flex-row gap-8">
      <div className="bg-white p-6 rounded shadow-md hover:shadow-lg transition duration-300 transform hover:translate-y-[-5px]">
          <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
          <p className="text-gray-600">
          Our web page is fully responsive, ensuring it looks great on all devices.
          </p>
      </div>
      <div className="bg-white p-6 rounded shadow-md hover:shadow-lg transition duration-300 transform hover:translate-y-[-5px]">
          <h3 className="text-xl font-semibold mb-2">Simple and Minimalistic</h3>
          <p className="text-gray-600">
          We believe in the beauty of simplicity, making the user experience smooth and clutter-free.
          </p>
      </div>
      <div className="bg-white p-6 rounded shadow-md hover:shadow-lg transition duration-300 transform hover:translate-y-[-5px]">
          <h3 className="text-xl font-semibold mb-2">Built with Modern Tools</h3>
          <p className="text-gray-600">
          This landing page is powered by Next.js, TypeScript, and Tailwind CSS.
          </p>
      </div>
      </div>
  </div>
  </section>
);
};  

const Footer: React.FC = () => {
return (
<footer className="bg-gray-200 py-6">
  <div className="container mx-auto text-center flex flex-col items-center sm:flex-row sm:justify-between">
      <div className="mb-4 sm:mb-0 flex items-center">
      <Link href="/terms-of-service" className="text-gray-600 hover:text-gray-800">
          Terms of Service
      </Link>
      <span className="text-gray-600 mx-2">•</span>
      <Link href="/contact" className="text-gray-600 hover:text-gray-800">
          Contact
      </Link>
      </div>
      <div className="flex items-center space-x-2">
      <span className="text-gray-600 hidden sm:inline">Follow Us</span>
      <span className="text-gray-600 hidden sm:inline">•</span>
      <button
          id="instagram"
          className="border-2 hover:border-0 border-pink-500 bg-gradient-to-b text-2xl hover:from-indigo-600 hover:via-pink-600 hover:to-yellow-500 hover:text-white bg-white text-pink-600 w-10 h-10 transform hover:-translate-y-3 rounded-full duration-500"
      >
          <FontAwesomeIcon icon={faInstagram} />
      </button>
      <button
          id="youtube"
          className="bg-white transform hover:-translate-y-3 border-2 w-10 h-10 rounded-full duration-500 text-red-500 border-red-500 hover:bg-red-500 hover:text-white text-2xl"
      >
          <FontAwesomeIcon icon={faYoutube} />
      </button>
      <button
          id="discord"
          className="bg-white transform hover:-translate-y-3 border-2 w-10 h-10 rounded-full duration-500 text-indigo-500 border-indigo-500 hover:bg-indigo-500 hover:text-white text-2xl"
      >
          <FontAwesomeIcon icon={faDiscord} />
      </button>
      <button
          id="linkedin"
          className="bg-white transform hover:-translate-y-3 border-2 w-10 h-10 rounded-full duration-500 text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white text-2xl"
      >
          <FontAwesomeIcon icon={faLinkedinIn} />
      </button>
      </div>
  </div>
  </footer>
);
};

const LandingPage: React.FC = () => {
  return (
  <div className="flex flex-col min-h-screen min-w-screen">
      <Navbar/>
      <Sections/>
      <Footer/>
  </div>
);
};

export default LandingPage;