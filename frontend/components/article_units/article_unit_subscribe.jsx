import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import ArticleUnitSubscribeItem from './article_unit_subscribe_item.jsx';
import ArticleUnitSubscribeItemTwo from './article_unit_subscribe_item_two.jsx';

class ArticleUnitSubscribe extends React.Component {
  constructor(props){
      super(props);
      this.handleInput = this.handleInput.bind(this);
      this.state = {
        email: ""
      };
  }

  handleInput(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render(){
    return (
      <div className="article-unit-subscribe article-unit">
        <div className="article-unit-list-top"></div>
        <div className="horizontal">
          <ul className="horizontal">
            <ArticleUnitSubscribeItem
              header="Get The Magazine"
              text="Special Holiday Gift Offer – Buy one, get one FREE."
              action="subscribe"
              />
            <ArticleUnitSubscribeItemTwo
              header="Get Our Newsletter"
              text="MANIC’s biggest stories delivered to your inbox."
              action="submit"
              handleInput={this.handleInput}
              />
            <ArticleUnitSubscribeItem
              header={`We're On Twitter`}
              text="See what's inspiring us."
              action="follow"
              link="https://twitter.com/wired"
              />
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(ArticleUnitSubscribe);

















// comment
