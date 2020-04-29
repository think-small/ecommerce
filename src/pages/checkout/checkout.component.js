import React from "react";

//  =====  REDUX  =====  //
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectCartTotalCost } from "../../redux/cart/cart.selectors";

//  =====  COMPONENTS  =====  //
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.scss";

const Checkout = (props) => {
  return (
    <div className="checkout">
      <header className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </header>
      {props.items.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <div className="total">Total: ${props.totalCost}</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
  totalCost: selectCartTotalCost,
});

export default connect(mapStateToProps)(Checkout);
