import React, { useState } from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { SHOP_DATA } from "../../data/dummy-data";

const ShopPage = () => {
  //  eslint-disable-next-line
  const [shopData, setShopData] = useState(SHOP_DATA);

  return (
    <div>
      {shopData.map((collection) => (
        <CollectionPreview
          key={collection.id}
          id={collection.id}
          title={collection.title}
          items={collection.items}
        />
      ))}
    </div>
  );
};

export default ShopPage;
