import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { auth, createUser } from "../../firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import FormButton from "../form-button/form-button.component";
import "./register-form.styles.scss";

const Register = (props) => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "displayName":
        setDisplayName(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      case "email":
        setEmail(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password did not match, try again");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUser(user, { displayName });
      setDisplayName("");
      setPassword("");
      setConfirmPassword("");
      setEmail("");
      props.history.push("/");
    } catch (e) {
      console.log(
        `Error while creating new user with email and password: ${e}`
      );
    }
  };

  return (
    <div className="register-form">
      <h2 className="title">I Do Not Have an Account</h2>
      <span>Sign up with your email and password</span>
      <form className="register-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />

        <FormButton type="submit">Register</FormButton>
      </form>
    </div>
  );
};

export default withRouter(Register);
