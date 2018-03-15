import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavigationBarBottomItem from './navigation_bar_bottom_item.jsx';

class NavigationBarBottom extends React.Component {
  constructor(props){
      super(props);
  }

  render() {
    let categories = ["business", "culture", "gear", "ideas", "science", "security", "transportation"];
    let items = categories.map((el, i) => {
      let classes = this.props.category === el ?
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
  }
}

export default withRouter(NavigationBarBottom);
