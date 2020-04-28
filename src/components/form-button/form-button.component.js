import React from "react";
import "./form-button.styles.scss";

const FormButton = ({ children, icon, inverted, ...otherFormButtonProps }) => {
  return (
    <button
      className={`form-button ${inverted ? "inverted" : ""}`}
      {...otherFormButtonProps}
    >
      {children}{" "}
      {icon && (
        <div className="icon">
          <i className={icon}></i>
        </div>
      )}
    </button>
  );
};

export default FormButton;
