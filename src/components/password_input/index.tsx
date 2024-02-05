"use client"
import { useState } from "react";
import eye from "@/assets/images/eye.svg";
import invisibleEye from "@/assets/images/invisibleEye.svg";
import validatePassword from "@/utils/globalFunctions";
import "./style.css";
import { register } from "module";

interface inputProps {
  placeholder: string;
  onPasswordChange: (value: string) => void;
  isRegister?: boolean
}

function PasswordInput({ placeholder, onPasswordChange, isRegister }: inputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [label, setLabel] = useState('');
  const [ph, setPh] = useState(placeholder);
  const inputType = showPassword ? 'text' : 'password';
  const [inputValue, setInputValue] = useState("");
  const [borderColor, setBorderColor] = useState('rgba(0, 0, 0, 0.23)');
  const [labeColor, setLabelColor] = useState('rgb(81, 82, 85)'); 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setInputValue(newPassword);
    onPasswordChange(newPassword);

    if (isRegister) {
      if (e.target.value === "") {
        setBorderColor('rgba(0, 0, 0, 0.23)');
        setLabelColor('rgb(81, 82, 85)');
      } else {
        const isValid = validatePassword(newPassword);
        setBorderColor(isValid ? '#2E7D32' : '#D32F2F');
        setLabelColor(isValid ? '#2E7D32' : '#D32F2F'); 
      }
    }
  };

  const handleFocus = () => {
    if (inputValue === "") {
      setLabel(ph);
      setPh("");
    }

    if(isRegister){
      setShowTooltip(true);
    }

    if (inputValue === "") {
      setBorderColor('rgba(0, 0, 0, 0.23)');
      setLabelColor('rgb(81, 82, 85)');
    }
  };

  const handleBlur = () => {
    if (inputValue === "") {
      setPh(label);
      setLabel("");
    }

    if(isRegister){
      setShowTooltip(false);
    }
  };

  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="password-input-container" style={{ borderColor }}>
        {label !== "" && (
          <div className="password-label-container" style={{ color: labeColor }}>
            <label style={{ color: labeColor }}>{label}</label>
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

                {showTooltip && (
                  <div className="tooltip">
                    Mínimo de 8 caracteres, pelo menos uma letra maiúscula, uma letra
                    minúscula e um número
                  </div>
                )}
            </button>
        </div>
    </div>
  )
}

export default PasswordInput