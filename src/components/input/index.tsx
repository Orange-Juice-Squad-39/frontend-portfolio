"use client"
import { useState } from "react";
import eye from "@/assets/images/eye.svg";
import invisibleEye from "@/assets/images/invisibleEye.svg";
import "./style.css";

interface inputProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  value: string
  onChange: (value: string) => void;
}

function Input({ label, type, name, placeholder, value, onChange }: inputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [lbl, setLbl] = useState(label);
  const [ph, setPh] = useState(placeholder);
  const inputType = showPassword ? "text" : type;
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    () => onChange(e.target.value);
  };

  const handleFocus = () => {
    if (inputValue === "") {
      setLbl(ph);
      setPh("");
    }
  };

  const handleBlur = () => {
    if (inputValue === "") {
      setPh(lbl);
      setLbl("");
    }
  };

  return (
    <div className="input-container">
        {lbl !== "" && (
          <div className="label-container">
            <label>{lbl}</label>
          </div>
        )}

        <div className="input-content">
          <input 
            type={inputType} 
            name={name} 
            placeholder={ph}
            value={inputValue}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="input-content input-text"
          />

          {type === "password" && (
            <button
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword && (
                <img src={eye.src} className="eye-button"/>
              )}
              {!showPassword && (
                <img src={invisibleEye.src} className="eye-button"/>
              )}
            </button>
          )}
        </div>
    </div>
  )
}

export default Input