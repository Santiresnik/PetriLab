"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import PasswordToggle from "../components/PasswordToggle";
import RememberMeCheckbox from "../components/RememberMeCheckbox";
import BackgroundRight from "../components/bg_right";
import PasswordInput from "../components/PasswordInput";
import hashString from "../components/hasher";
import { fetchPOST } from "../components/fetch";


interface FormInputProps {
  label: string;
  placeholder: string;
  type: string;
  showPassword: boolean;
  handlePasswordToggle: () => void;
  onChangeValue: (form: string) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder,
  type,
  showPassword,
  handlePasswordToggle,
  onChangeValue,
}) => {
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeValue(e.target.value);
    var idd = document.getElementById(label.toLowerCase())
    if (idd != null) {
      idd.style.color = "rgb(31, 41, 55)";
    }
  };
  
  return(
  <div className="mb-4">
    <label id={label.toLowerCase()+"label"} htmlFor={label.toLowerCase()} className="block text-sm font-semibold text-gray-800">
      {label}
    </label>
    <div className="mb-2 relative">
      <input
        id={label.toLowerCase()}
        type={type === "password" && showPassword ? "text" : type}
        placeholder={placeholder}
        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-txtbox_bg_color border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
        onChange={handleValueChange}
        required
      />
      {type === "password" && (
        <PasswordToggle showPassword={showPassword} handlePasswordToggle={handlePasswordToggle} />
      )}
    </div>
  </div>
);
}

const Register: React.FC = () => {
  const[name, setName] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[password2, setPassword2] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  const handlePasswordToggle2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let checkboxTerms  =  document.getElementById("terms") as HTMLInputElement;
    let checkboxTermsLabel  =  document.getElementById("termslabel") as HTMLInputElement;
    var fullname = document.getElementById("full name")
    var fullname_label = document.getElementById("full namelabel")
    
    var password_id_label = document.getElementById("passwordlabel")
    var password2_id_label = document.getElementById("confirm passwordlabel")
    
    var colorr = "rgb(31, 41, 55)"
    
    if (checkboxTerms != null && checkboxTermsLabel != null)
    {
      checkboxTermsLabel.style.color = "rgb(55 65 81)"
      checkboxTermsLabel.style.fontStyle = "normal"
    }
    
    if (fullname != null && fullname_label != null) {
      fullname_label.textContent = "Full Name"
      fullname_label.style.color = colorr
      fullname_label.style.fontStyle = "normal"
    }
    if (password2_id_label != null && password_id_label != null) {
      password_id_label.textContent = "Password"
      password_id_label.style.color = colorr
      password_id_label.style.fontStyle = "normal"

      password2_id_label.style.color = colorr
      password2_id_label.style.fontStyle = "normal"
    }


    if (!(name.indexOf(' ') >= 0)){
      if (fullname != null && fullname_label != null) {
        fullname_label.textContent = "Full Name *Fill in a full name"
        fullname_label.style.color = "red"
        fullname_label.style.fontStyle = "italic"
        fullname.style.color = "red"
      }
      return false;
    }

    if (!(password.length > 3 && password.length < 17)){
      if (password2_id_label != null && password_id_label != null) {
        password_id_label.textContent = "Password *Must be 4-16 characters"
        password_id_label.style.color = "red"
        password_id_label.style.fontStyle = "italic"
      }
      return false
    }

    if (password != password2){

      if (password2_id_label != null && password_id_label != null) {
        password_id_label.textContent = "Password *Passwords don't match"
        password_id_label.style.color = "red"
        password_id_label.style.fontStyle = "italic"

        password2_id_label.style.color = "red"
        password2_id_label.style.fontStyle = "italic"
      }
      return false;
    }
    
    if (checkboxTerms.checked != true && checkboxTerms != null)
    {
      checkboxTermsLabel.style.color = "red"
      checkboxTermsLabel.style.fontStyle = "italic"
      return false
    }
    
    else{

      const userData = {
        name : name,
        contra: hashString(password),
        email: email,
        
      };
      
      fetchPOST(userData);


      
      
      alert("Signed In Successfully!")
      //window.location.href = 'https://petrilab.vercel.app/';
    }
  };
  
  return (
    <div className="relative flex flex-col md:flex-row items-stretch md:h-screen overflow-hidden bg-gray-100">
      <div className="w-full h-screen md:w-96 md:flex-shrink-0 bg-bg_color rounded-md shadow-md">
        <div className="flex flex-col justify-center items-center h-[100vh] p-8 md:p-16">
          <h1 className="text-3xl font-bold text-center text-gray-700">PetriLab</h1>
          <form className="mt-6 w-full max-w-sm" onSubmit={handleFormSubmit}>
            <FormInput
              label="Full Name"
              placeholder="Pollo Pérez"
              type="text"
              showPassword={showPassword}
              handlePasswordToggle={handlePasswordToggle}
              onChangeValue={setName}
              />
            
            <FormInput
              label="Email"
              placeholder="petrilab@example.com"
              type="email"
              showPassword={showPassword}
              handlePasswordToggle={handlePasswordToggle}
              onChangeValue={setEmail}
            />
            
            <PasswordInput
              label="Password"
              type="password"
              showPassword={showPassword}
              handlePasswordToggle={handlePasswordToggle}
              onChangeValue={setPassword}
              showStrength={"true"}
            />
            <FormInput
              label="Confirm Password"
              placeholder="********"
              type="password"
              showPassword={showPassword2}
              handlePasswordToggle={handlePasswordToggle2}
              onChangeValue={setPassword2}
            />
            <div className="flex items-center mb-4">
              <RememberMeCheckbox label="I agree to the terms and conditions" htmlFor="terms" />
            </div>
            <div className="mt-2">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Sign Up
              </button>
            </div>
            <p className="mt-4 text-sm text-center text-gray-700">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-blue-600 hover:underline">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
      <BackgroundRight/>
    </div>
  );
};

export default Register;