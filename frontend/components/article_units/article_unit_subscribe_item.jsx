import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ArticleUnitMore from './article_unit_more.jsx';

class ArticleUnitSubscribeItem extends React.Component {
  constructor(props){
      super(props);
  }

  render(){
    return (
      <li className="article-unit-subscribe-item">
        <div className="article-unit-bottom">
          <div className="article-unit-subscribe-item-top">
            <h3>{this.props.header.toUpperCase()}</h3>
          </div>
          <div className="article-unit-subscribe-item-bottom horizontal">
            <div className="article-unit-list-item-title">
              <h1>{this.props.text}</h1>
            </div>
            <div className="article-unit-image">
              <img src="frontend/images/one.png"></img>
            </div>
          </div>
          <div className="article-unit-subscribe-item-more">
          </div>
        </div>
        <ArticleUnitMore
          header={this.props.action}
          link={this.props.link}
          />
      </li>
    );
  }
}

export default withRouter(ArticleUnitSubscribeItem);

















// comment
