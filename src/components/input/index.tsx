"use client"
import { useState } from "react";
import "./style.css";

interface inputProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  onChange: (value: string) => void;
}

function Input({ label, type, name, placeholder, onChange }: inputProps) {
  const [lbl, setLbl] = useState(label);
  const [ph, setPh] = useState(placeholder);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange(e.target.value);
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
            type={type} 
            name={name} 
            placeholder={ph}
            value={inputValue}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="input-content input-text"
          />
        </div>
    </div>
  )
}

export default Input