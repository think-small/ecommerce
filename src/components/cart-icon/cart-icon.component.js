import React from "react";
import { connect } from "react-redux";
import { toggleHiddenStateActionCreator } from "../../redux/cart/cart.actions";
import { ReactComponent as ShoppingCartIcon } from "../../assets/cart.svg";
import "./cart-icon.styles.scss";

const CartIcon = (props) => {
  return (
    <div className="cart-icon" onClick={props.toggleHideCart}>
      <ShoppingCartIcon className="icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleHideCart: () => dispatch(toggleHiddenStateActionCreator()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
