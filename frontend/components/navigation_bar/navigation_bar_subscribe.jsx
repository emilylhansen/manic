import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import ArticleUnitSubscribeItem from '../article_units/article_unit_subscribe_item.jsx';

class NavigationSubscribe extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="navigation-bar-subscribe"
        onMouseLeave={this.props.handleMouseHover}>
        <div className="navigation-bar-subscribe-items">
          <ul className="horizontal">
            <ArticleUnitSubscribeItem
              header="Get The Magazine"
              text="Special Holiday Gift Offer – Buy one, get one FREE."
              action="subscribe"
              />
            <ArticleUnitSubscribeItem
              header="Get Our Newsletter"
              text="WIRED’s biggest stories delivered to your inbox."
              action="submit"
              />
            <ArticleUnitSubscribeItem
              header="We're On Pinterest"
              text="See what's inspiring us."
              action="follow"
              />
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(NavigationSubscribe);

















// comment
