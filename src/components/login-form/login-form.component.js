import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import FormButton from "../form-button/form-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import "./login-form.styles.scss";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(() => value);
        break;
      case "password":
        setPassword(() => value);
        break;
      default:
        return;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    console.log(`logging in with email: ${email} and password: ${password}`);
  };

  return (
    <div>
      <h2>I Already Have An Account</h2>
      <span>Log in with your email and password</span>

      <form className="login-form" onSubmit={onSubmit}>
        <FormInput
          id="email"
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />

        <FormInput
          id="password"
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />

        <div className="button-container">
          <FormButton type="submit">Log In</FormButton>
          <FormButton icon={"fab fa-google"} onClick={signInWithGoogle}>
            Log In with Google
          </FormButton>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
