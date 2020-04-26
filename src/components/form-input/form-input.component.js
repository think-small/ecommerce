import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherFormInputProps }) => {
  return (
    <div className="form-group">
      {label && (
        <label
          className={`form-input-label ${
            otherFormInputProps.value.length ? "shrink" : ""
          }`}
        >
          {label}
        </label>
      )}
      <input
        className="form-input"
        onChange={handleChange}
        {...otherFormInputProps}
      />
    </div>
  );
};

export default FormInput;
