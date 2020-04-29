import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import "./header.styles.scss";

const Header = ({ currentUser, cartHiddenState }) => {
  const handleClick = () => auth.signOut();

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
        <CartIcon />
      </div>
      {!cartHiddenState && <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHiddenState: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
