"use client";
import React, { useState } from 'react';
import Menu from './components/menu_navbar';
import LandingPage from './components/landing_page' 


export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  const toggleLoggedIn = () => {
    setLoggedIn(!loggedIn); // Toggle the state (true to false, false to true)
  };

  return (
    <div className={`bg-txtbox_bg_color_2 ${loggedIn ? 'logged-in' : 'anonymous'}`}>
      {loggedIn ? (
        // Content for logged users
        <Menu/>
      ) : (
        // Content for anonymous users
        <LandingPage/>
      )}
      <button onClick={toggleLoggedIn}>
        {loggedIn ? 'Log Out' : 'Log In'}
      </button>
    </div>
  );
}
