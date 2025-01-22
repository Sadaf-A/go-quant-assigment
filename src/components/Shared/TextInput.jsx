import React from "react";
import "../../styles/Button.css";

const TextInput = ({ label, type, value, onChange }) => {
  return (
    <div className="text-input">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default TextInput;
