"use client";
import React, { useState } from "react";
import Link from "next/link";
import RememberMeCheckbox from "../components/RememberMeCheckbox";
import BackgroundRight from "../components/bg_right";
import PasswordInput from "../components/PasswordInput";
import EmailInput from "../components/EmailInput";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const Http = new XMLHttpRequest();
    // const url = 'https://repo-node.vercel.app/api/users';
    // Http.open("GET", url);
    // Http.send();

    // Http.onreadystatechange = (e) => {
    //   console.log(Http.responseText);
    // }
    fetch('https://petri-lab.vercel.app/api/users', {
      headers: {
        "Access-Control-Allow-Origin": "localhost:3000"
      }
    }).then((res) => {
      return res.json();
    }).then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    })
  };
  

  return (
    <div className="relative flex flex-col md:flex-row items-stretch md:h-screen overflow-hidden bg-gray-100">
      <div className="w-full h-screen md:w-96 md:flex-shrink-0 bg-bg_color rounded-md shadow-md">
        <div className="flex flex-col justify-center items-center h-[100vh] p-8 md:p-16">
          <h1 className="text-3xl font-bold text-center text-gray-700">PetriLab</h1>
          <form className="mt-6 w-full max-w-sm" onSubmit={handleFormSubmit}>
            <EmailInput onChangeValue={setEmail}/>   
            <PasswordInput
              label="Password"
              type="password"
              showPassword={showPassword}
              handlePasswordToggle={handlePasswordToggle}
              onChangeValue={setPassword}
              showStrength={"false"}
            />
            
            <RememberMeCheckbox htmlFor="RememberMe"/>
            
            <Link href="/forgot" className="text-xs text-blue-600 hover:underline">
              Forgot Password?
            </Link>
            
            <div className="mt-2">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Login
              </button>
            </div>
            
            <p className="mt-4 text-sm text-center text-gray-700">
              Don't have an account?{" "}
              <Link href="/signup" className="font-medium text-blue-600 hover:underline">
                Sign up
              </Link>
            </p>
            
            <div className="my-4 border-b border-gray-300"></div>
          </form>
          <form className="w-full max-w-sm">
          <div className="mt-6">
              <button className="w-full px-4 py-2 flex items-center justify-center text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none">
                Sign In with Google
              </button>
            </div>
            
            <div className="mt-6">
              <button className="w-full px-4 py-2 flex items-center justify-center text-white bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none">
                Sign In with Github
              </button>
            </div>
          </form>
        </div> 
      </div>
      <BackgroundRight/>      
    </div>
  );
}
