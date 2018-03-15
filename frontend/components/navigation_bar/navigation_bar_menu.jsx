import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import NavigationBarMenuItem from './navigation_bar_menu_item.jsx';

class NavigationBarMenu extends React.Component {
  constructor(props){
      super(props);
  }

  render(){
    let categories = ["business", "culture", "gear", "ideas", "science", "security", "transportation"];
    let images = ["b.png", "c.png", "g.png", "i.png", "s.png", "s2.png", "t.png"];
    let items = categories.map((el, i) => {
      let classes = this.props.category === el ?
      {active: "navigation-bar-menu-section-active",
      activeRank: `navigation-bar-menu-section-active-${i+1}`} : null;
      return (
        <NavigationBarMenuItem
          key={i}
          rank={i+1}
          category={el}
          classes={classes}
          image={images[i]}
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
  }
}

export default withRouter(NavigationBarMenu);

















// comment
