import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ title, subtitle, linkUrl, imageUrl, size }) => {
  return (
    <div className={`menu-item ${size}`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <div className="title">{title}</div>
        <span className="subtitle">{subtitle}</span>
      </div>
    </div>
  );
};

export default MenuItem;
