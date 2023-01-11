import React from 'react';

const FormSelect = ({ name, options, labelText, value, handleChange }) => {
  return (
    <div>
      <label htmlFor={name}>{labelText}</label>
      <select
        name={name}
        id={name}
        value={value}
        className="form-select"
        onChange={handleChange}
      >
        {options.map((opt, index) => {
          return (
            <option key={index} value={opt}>
              {opt}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormSelect;
