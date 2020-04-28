import React from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import FormButton from "../form-button/form-button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-cartItems">
        {cartItems.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <FormButton>GO TO CHECKOUT</FormButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
