import React from "react";
import { connect } from "react-redux";
import { addItemActionCreator } from "../../redux/cart/cart.actions";
import FormButton from "../form-button/form-button.component";
import "./collection-item.styles.scss";

const CollectionItem = ({ id, name, price, imageUrl, addItem }) => {
  const handleClick = () => addItem({ id, name, price, imageUrl, addItem });
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}>
        <FormButton inverted onClick={handleClick}>
          Add to Cart
        </FormButton>
      </div>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItemActionCreator(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
