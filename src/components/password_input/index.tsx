"use client"
import { useState } from "react";
import eye from "@/assets/images/eye.svg";
import invisibleEye from "@/assets/images/invisibleEye.svg";
import "./style.css";

interface inputProps {
    placeholder: string;
    onPasswordChange: (value: string) => void;
}

function PasswordInput({ placeholder, onPasswordChange }: inputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [label, setLabel] = useState('');
  const [ph, setPh] = useState(placeholder);
  const inputType = showPassword ? 'text' : 'password';
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onPasswordChange(e.target.value);
  };

  const handleFocus = () => {
    if (inputValue === "") {
      setLabel(ph);
      setPh("");
    }
  };

  const handleBlur = () => {
    if (inputValue === "") {
      setPh(label);
      setLabel("");
    }
  };

  return (
    <div className="password-input-container">
        {label !== "" && (
          <div className="password-label-container">
            <label>{label}</label>
          </div>
        )}

        <div className="password-input-content">
            <input 
                type={inputType}
                name='password'
                placeholder={ph}
                value={inputValue}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="password-input-content password-input-text"
            />

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
        </div>
    </div>
  )
}

export default PasswordInput