import React from 'react';

const ReusableInput = ({ type, label, placeholder, value, onChange }) => {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default ReusableInput;
