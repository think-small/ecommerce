import React from "react";

//  =====  REDUX  =====  //
import { connect } from "react-redux";
import { selectSections } from "../../redux/directory-menu/directory-menu.selectors";

//  =====  COMPONENTS  =====  //
import MenuItem from "../../components/menu-item/menu-item.component";
import "./directory-menu.styles.scss";

const DirectoryMenu = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ title, linkUrl, imageUrl, size, id }) => (
        <MenuItem
          title={title}
          subtitle="SHOP NOW"
          linkUrl={linkUrl}
          imageUrl={imageUrl}
          size={size}
          key={id}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  sections: selectSections(state),
});

export default connect(mapStateToProps)(DirectoryMenu);
