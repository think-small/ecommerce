import React, { useState } from "react";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import FormButton from "../form-button/form-button.component";
import "./login-form.styles.scss";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flashMessage, setFlashMessage] = useState("");

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

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
      setFlashMessage("");
    } catch (e) {
      setFlashMessage("Email and/or password not found - unable to log in");
    }
  };

  const handleGoogleAuth = async () => {
    await signInWithGoogle();
  };

  return (
    <div>
      <h2>I Already Have An Account</h2>
      <span>Log in with your email and password</span>
      <div className="flash-message">{flashMessage}</div>

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
          <FormButton
            type="button"
            icon={"fab fa-google"}
            onClick={handleGoogleAuth}
          >
            Log In with Google
          </FormButton>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
