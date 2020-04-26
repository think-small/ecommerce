import React from "react";
import { Link } from "react-router-dom";
import Firebase, { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";

const Header = ({ currentUser }) => {
  const handleClick = () => auth.signOut();
  if (currentUser) {
    console.log(currentUser.displayName);
  }

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="navbar">
        {currentUser && (
          <div className="nav-item">Welcome, {currentUser.displayName}</div>
        )}
        <Link className="nav-item" to="/shop">
          SHOP
        </Link>
        {currentUser ? (
          <div className="nav-item" onClick={handleClick}>
            LOGOUT
          </div>
        ) : (
          <Link className="nav-item" to="/register-login">
            REGISTER / LOGIN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
