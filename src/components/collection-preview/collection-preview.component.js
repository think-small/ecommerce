import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h3 className="title">{title}</h3>
      <div className="items">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem
              key={item.id}
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              id={item.id}
            />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
