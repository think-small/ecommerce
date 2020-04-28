import React from "react";
import { connect } from "react-redux";
import FormButton from "../form-button/form-button.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ items }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.map((item) => {
          return <div>{item.name}</div>;
        })}
      </div>
      <FormButton>GO TO CHECKOUT</FormButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.cart.items,
});

export default connect(mapStateToProps)(CartDropdown);
