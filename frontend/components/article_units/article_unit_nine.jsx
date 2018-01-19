import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import ArticleUnitListItem from './article_unit_list_item.jsx';

class ArticleUnitNine extends React.Component {
  constructor(props){
      super(props);
  }

  render(){
    return (
      <div className="article-unit-nine article-unit">
        <div className="article-unit-nine-top article-unit-list-top"></div>
        <div className="article-unit-nine-middle article-unit-middle">
          <div className="article-unit-nine-middle-header article-unit-middle-header">
            <h3>{this.props.header}</h3>
          </div>
        </div>
        <div className="article-unit-nine-bottom article-unit-list-bottom">
          <ul>
            <ArticleUnitListItem
              story={this.props.stories[0]}
              />
            <ArticleUnitListItem
              story={this.props.stories[1]}
              />
            <ArticleUnitListItem
              story={this.props.stories[2]}
              />
          </ul>
        </div>
        <div className="article-unit-nine-more article-unit-more">
          <div className="article-unit-nine-more-context article-unit-more-context verticle">
            <div className="article-unit-nine-more-button article-unit-more-button">
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i></div>
            <h2>{`more ${this.props.header}`}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ArticleUnitNine);

















// comment
