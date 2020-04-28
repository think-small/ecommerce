import React from "react";
import { connect } from "react-redux";
import "./cart-item.styles.scss";
import { removeItemActionCreator } from "../../redux/cart/cart.actions";

const CartItem = (props) => {
  const { name, imageUrl, price, quantity } = props.item;
  const handleClick = () => props.removeCartItem(props.item);
  return (
    <div className="cart-item" onClick={handleClick}>
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="item-name">{name}</span>
        <span className="item-price">
          {quantity} X ${price}
        </span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeCartItem: (item) => dispatch(removeItemActionCreator(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
