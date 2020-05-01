import React from "react";

//  =====  REDUX  =====  //
import { connect } from "react-redux";
import { selectShopItems } from "../../redux/shop/shop.selectors";

//  =====  COMPONENTS  =====  //
import CollectionPreview from "../collection-preview/collection-preview.component";
import "./collection-overview.styles.scss";

const CollectionsOverview = ({ shopItems }) => {
  return (
    <div className="collection-overview">
      {shopItems.map(({ id, ...otherShopItemProps }) => (
        <CollectionPreview key={id} {...otherShopItemProps} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  shopItems: selectShopItems(state),
});

export default connect(mapStateToProps)(CollectionsOverview);
