import React from 'react';

const NavigationBarMenuItem = (props) => {
  let active = props.classes ? props.classes.active : null;
  let activeRank = props.classes ? props.classes.activeRank : null;
  return (
    <div className={`navigation-bar-menu-section
      navigation-bar-menu-section-${props.rank}
      ${activeRank}
      ${active}`}>
      <div className="navigation-bar-menu-section-content">
        <div className="navigation-bar-menu-section-image">
          <img src={`frontend/images/${props.image}`}></img>
        </div>
        <h2><a href={`index.html#/category/${props.category}`}
          onClick={() => window.location.reload()}>{props.category.toUpperCase()}</a></h2>
      </div>
    </div>
  );
};


export default NavigationBarMenuItem;
