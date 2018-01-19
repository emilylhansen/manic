import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import ArticleUnitListItem from './article_unit_list_item.jsx';
import ArticleUnitListItemTwo from './article_unit_list_item_two.jsx';

class ArticleUnitEleven extends React.Component {
  constructor(props){
      super(props);
  }

  render(){
    return (
      <div className="article-unit-eleven article-unit">
        <div className="article-unit-eleven-top article-unit-list-top"></div>
        <div className="article-unit-eleven-middle article-unit-middle">
          <div className="article-unit-eleven-middle-header article-unit-middle-header">
            <h3>{this.props.header}</h3>
          </div>
        </div>
        <div className="article-unit-eleven-bottom article-unit-list-bottom">
          <ul>
            <ArticleUnitListItemTwo
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
        <div className="article-unit-eleven-more article-unit-more">
          <div className="article-unit-eleven-more-context article-unit-more-context verticle">
            <div className="article-unit-eleven-more-button article-unit-more-button">
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i></div>
            <h2>{`more ${this.props.header}`}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ArticleUnitEleven);

















// comment
