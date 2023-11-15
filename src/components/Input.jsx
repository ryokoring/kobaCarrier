import React, { useState } from "react";
import styles from './Input.module.css';
const Input = ({ onInputChange, type }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if(onInputChange) {
      onInputChange(value);
    }
  };

  return (
    <div >
      <input
        className={styles["input"]}
        type={type}
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;