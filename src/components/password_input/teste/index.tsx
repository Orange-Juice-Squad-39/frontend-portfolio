import React, { useState } from "react";
import eye from "@/assets/images/eye.svg";
import invisibleEye from "@/assets/images/invisibleEye.svg";
import "./style.css";

interface InputProps {
  placeholder: string;
  onPasswordChange: (value: string) => void;
}

const PasswordInput = ({ placeholder, onPasswordChange }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [borderColor, setBorderColor] = useState("rgba(0, 0, 0, 0.23)");

  const validatePassword = (input) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(input);
    const hasLowerCase = /[a-z]/.test(input);
    const hasNumber = /\d/.test(input);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(input);

    return (
      input.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumber &&
      hasSpecialChar
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setInputValue(newPassword);
    onPasswordChange(newPassword);

    if (newPassword === "") {
      setBorderColor("rgba(0, 0, 0, 0.23)");
    } else {
      const isValid = validatePassword(newPassword);
      setBorderColor(isValid ? "#2E7D32" : "#D32F2F");
    }
  };

  const handleFocus = () => {
    if (inputValue === "") {
      setBorderColor("rgba(0, 0, 0, 0.23)");
    }
  };

  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="password-input-container" style={{ borderColor }}>
      <div className="password-label-container">
        <label style={{ color: borderColor }}>{placeholder}</label>
      </div>

      <div className="password-input-content">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setShowTooltip(true)}
          onBlur={() => setShowTooltip(false)}
          className="password-input-content password-input-text"
        />

        <button
          className="password-toggle"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <img src={eye.src} className="eye-button" alt="Show Password" />
          ) : (
            <img
              src={invisibleEye.src}
              className="eye-button"
              alt="Hide Password"
            />
          )}
        </button>
      </div>

      {showTooltip && (
        <div className="tooltip">
          Mínimo de 8 caracteres, pelo menos uma letra maiúscula, uma letra
          minúscula e um número
        </div>
      )}
    </div>
  );
};

export default PasswordInput;
