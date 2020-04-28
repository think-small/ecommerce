import React from "react";
import { connect } from "react-redux";
import { toggleHiddenStateActionCreator } from "../../redux/cart/cart.actions";
import { ReactComponent as ShoppingCartIcon } from "../../assets/cart.svg";
import "./cart-icon.styles.scss";

const CartIcon = (props) => {
  return (
    <div className="cart-icon" onClick={props.toggleHideCart}>
      <ShoppingCartIcon className="icon" />
      <span className="item-count">{props.cartSize}</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartSize: state.cart.items.length,
});

const mapDispatchToProps = (dispatch) => ({
  toggleHideCart: () => dispatch(toggleHiddenStateActionCreator()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
