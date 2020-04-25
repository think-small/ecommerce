import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

const MenuItem = ({ title, subtitle, linkUrl, imageUrl, size, history }) => {
  return (
    <div className={`menu-item ${size}`} onClick={() => history.push(linkUrl)}>
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

export default withRouter(MenuItem);
