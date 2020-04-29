import React from "react";

//  =====  ROUTER  =====  //
import { withRouter } from "react-router-dom";

//  =====  REDUX  =====  //
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleHiddenStateActionCreator } from "../../redux/cart/cart.actions";

//  =====  COMPONENTS  =====  //
import FormButton from "../form-button/form-button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history, toggleHiddenState }) => {
  const handleClick = () => {
    toggleHiddenState();
    history.push("/checkout");
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-cartItems">
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <FormButton onClick={handleClick}>GO TO CHECKOUT</FormButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleHiddenState: () => dispatch(toggleHiddenStateActionCreator()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
