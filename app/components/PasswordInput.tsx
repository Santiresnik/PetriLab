import React, { useState } from "react";
import PasswordStrengthBar from 'react-password-strength-bar';
import PasswordToggle from "./PasswordToggle";

interface FormInputProps {
  label: string;
  type: string;
  showPassword: boolean;
  handlePasswordToggle: () => void;
  onChangeValue: (password: string) => void;
  showStrength: string;
}

const PasswordInput: React.FC<FormInputProps> = ({
  label,
  type,
  showPassword,
  handlePasswordToggle,
  onChangeValue,
  showStrength,
}) => {
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeValue(e.target.value);
    setPassword(e.target.value);
  };
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);


  return (
    <div className="mb-4">
      <label id={label.toLowerCase()+"label"} htmlFor={label.toLowerCase()} className="block text-sm font-semibold text-gray-800">
        {label}
      </label>
      <div className="mb-2 relative">
        <input
          type={type === "password" && showPassword ? "text" : type}
          id={label.toLowerCase()}
          placeholder = "********"
          onChange={handleChangePassword}
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-txtbox_bg_color border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
          required
        />
        {type === "password" && (
          <PasswordToggle showPassword={showPassword} handlePasswordToggle={handlePasswordToggle} />
        )}
      </div>
      {type === "password" && showStrength == "true" && (
        <div className="mt-2">
          <PasswordStrengthBar password={password} onChangeScore={setPasswordStrength}/>
        </div>
      )}
    </div>
  );
};

export default PasswordInput;