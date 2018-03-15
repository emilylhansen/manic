import React from 'react';

import NavigationBarMenuItem from './navigation_bar_menu_item.jsx';

const NavigationBarMenu = (props) => {

  let items = props.categories.map((el, i) => {
    let classes = props.category === el ?
    {active: "navigation-bar-menu-section-active",
    activeRank: `navigation-bar-menu-section-active-${i+1}`} : null;
    return (
      <NavigationBarMenuItem
        key={i}
        rank={i+1}
        category={el}
        classes={classes}
        image={props.images[i]}
        />
    );
  });
  return (
    <div className="navigation-bar-menu">
      <div className="navigation-bar-menu-top horizontal">
        {items}
      </div>
      <div className="navigation-bar-menu-bottom">
        <div className="navigation-bar-menu-bottom-list">
          <ul className="horizontal">
            <li><h2><a>photo</a></h2></li>
            <li><h2><a>video</a></h2></li>
            <li><h2><a>backchannel</a></h2></li>
            <li><h2><a>magazine</a></h2></li>
            <li><h2><a>manic insider</a></h2></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationBarMenu;

















// comment
