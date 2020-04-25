import React, { useState } from "react";
import MenuItem from "../../components/menu-item/menu-item.component";
import "./directory-menu.styles.scss";

const DirectoryMenu = () => {
  //  eslint-disable-next-line
  const [sections, setSections] = useState([
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ]);

  return (
    <div className="directory-menu">
      {sections.map(({ title, linkUrl, imageUrl, size, id }) => {
        return (
          <MenuItem
            title={title}
            subtitle="SHOP NOW"
            linkUrl={linkUrl}
            imageUrl={imageUrl}
            size={size}
            key={id}
          />
        );
      })}
    </div>
  );
};

export default DirectoryMenu;
