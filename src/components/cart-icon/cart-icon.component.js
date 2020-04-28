import React from "react";
import { connect } from "react-redux";
import { toggleHiddenStateActionCreator } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { ReactComponent as ShoppingCartIcon } from "../../assets/cart.svg";
import "./cart-icon.styles.scss";

const CartIcon = (props) => {
  return (
    <div className="cart-icon" onClick={props.toggleHideCart}>
      <ShoppingCartIcon className="icon" />
      <span className="item-count">{props.cartItemsCount}</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItemsCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleHideCart: () => dispatch(toggleHiddenStateActionCreator()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
