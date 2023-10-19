import React from "react";

interface RememberMeCheckboxProps {
  label?: string;
  htmlFor?: string;
}

const RememberMeCheckbox: React.FC<RememberMeCheckboxProps> = ({ label="Remember Me", htmlFor = "RememberMe" }) => {
  return (
    <div className="select-none">
    <div className="flex items-center mb-4">
      <input
        type="checkbox"
        id={htmlFor}
        className="mr-2 text-gray-700 rounded focus:ring-gray-300"
      />
      <label id={htmlFor+"label"} htmlFor={htmlFor} className="text-sm text-gray-800 cursor-pointer">
        {label}
      </label>
    </div>
    </div>
  );
};

export default RememberMeCheckbox;
