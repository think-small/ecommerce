import React from "react";
import "./form-button.styles.scss";

const FormButton = ({ children, icon, ...otherFormButtonProps }) => {
  return (
    <button className="form-button" {...otherFormButtonProps}>
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
