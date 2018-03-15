import React from 'react';

const NavigationBarBottomItem = (props) => {
  let active = props.classes ? props.classes.active : null;
  let activeRank = props.classes ? props.classes.activeRank : null;
  return (
    <div className={`navigation-bar-bottom-section
        navigation-bar-bottom-section-${props.rank}
        ${activeRank}
        ${active}`}>
      <h2>
        <a href={`index.html#/category/${props.category}`}
          onClick={() => window.location.reload()}>{props.category.toUpperCase()}
        </a>
      </h2>
    </div>
  );
};


export default NavigationBarBottomItem;
