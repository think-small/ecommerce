import React from "react";
import LoginForm from "../../components/login-form/login-form.component";
import RegisterForm from "../../components/register-form/register-form.component";
import "./register-login.styles.scss";

const RegisterLoginPage = () => {
  return (
    <div className="forms-container">
      <LoginForm />
      <RegisterForm />
    </div>
  );
};

export default RegisterLoginPage;
