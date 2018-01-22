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
        <div className="article-unit-subscribe-item-content article-unit-bottom">
          <div className="article-unit-subscribe-item-top">
            <h3>{this.props.header}</h3>
          </div>
          <div className="article-unit-subscribe-item-bottom horizontal">
            <div className="article-unit-subscribe-item-bottom-text article-unit-list-item-title">
              <h1>{this.props.text}</h1>
            </div>
            <div className="article-unit-subscribe-item-bottom-image article-unit-image">
              <img src="frontend/images/world.jpg"></img>
            </div>
          </div>
          <div className="article-unit-subscribe-item-more">
            <ArticleUnitMore
              header={this.props.header}
              />
          </div>
        </div>
      </li>
    );
  }
}

export default withRouter(ArticleUnitSubscribeItem);

















// comment
