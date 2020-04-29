import React from "react";

//  =====  REDUX  =====  //
import { connect } from "react-redux";
import {
  removeItemActionCreator,
  addItemActionCreator,
  deleteFromCartActionCreator,
} from "../../redux/cart/cart.actions";

//  =====  COMPONENTS  =====  //
import "./checkout-item.styles.scss";

const CheckoutItem = ({ deleteFromCart, addItem, removeItem, item }) => {
  const { name, quantity, price, imageUrl } = item;
  const handleClick = (e) => {
    const target = e.target.getAttribute("name");
    switch (target) {
      case "increase-quantity":
        addItem(item);
        return;
      case "decrease-quantity":
        removeItem(item);
        return;
      case "remove":
        deleteFromCart(item);
        return;
      default:
        return;
    }
  };

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img className="image field" src={imageUrl} alt={name} />
      </div>
      <div className="field">{name}</div>
      <div className="field">
        <i
          className="fas fa-caret-left arrow-icon"
          name="decrease-quantity"
          onClick={handleClick}
        ></i>
        {quantity}
        <i
          className="fas fa-caret-right arrow-icon"
          name="increase-quantity"
          onClick={handleClick}
        ></i>
      </div>
      <div className="field">{quantity * price}</div>
      <div className="remove-button" onClick={handleClick}>
        <i className="far fa-trash-alt" name="remove"></i>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItemActionCreator(item)),
  addItem: (item) => dispatch(addItemActionCreator(item)),
  deleteFromCart: (item) => dispatch(deleteFromCartActionCreator(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
