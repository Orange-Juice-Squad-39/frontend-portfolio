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
}

function Input({ label, type, name, placeholder }: inputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showPassword ? "text" : type;

  return (
    <div className="input-container">
        {label !== "" && (
          <div className="label-container">
            <label>{label}</label>
          </div>
        )}

        <div className="input-content">
          <input 
            type={inputType} 
            name={name} 
            placeholder={placeholder}
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