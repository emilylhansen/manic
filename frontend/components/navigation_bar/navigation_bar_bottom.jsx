import React from 'react';

import NavigationBarBottomItem from './navigation_bar_bottom_item.jsx';

const NavigationBarBottom = (props) => {
  let items = props.categories.map((el, i) => {
    let classes = props.category === el ?
    {active: "navigation-bar-bottom-section-active",
    activeRank: `navigation-bar-bottom-section-active-${i+1}`} : null;
    return (
      <NavigationBarBottomItem
        key={i}
        rank={i+1}
        category={el}
        classes={classes}
        />
    );
  });

  return (
    <div className="navigation-bar-bottom">
      {items}
    </div>
  );
};

export default NavigationBarBottom;
