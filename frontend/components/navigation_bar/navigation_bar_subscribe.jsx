import React from 'react';

import ArticleUnitSubscribeItem from '../article_units/article_unit_subscribe_item.jsx';
import ArticleUnitSubscribeItemTwo from '../article_units/article_unit_subscribe_item_two.jsx';

const NavigationSubscribe = (props) => {
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
          <ArticleUnitSubscribeItemTwo
            header="Get Our Newsletter"
            text="WIRED’s biggest stories delivered to your inbox."
            action="submit"
            handleInput={this.props.handleInput}
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
};


export default NavigationSubscribe;

















// comment
