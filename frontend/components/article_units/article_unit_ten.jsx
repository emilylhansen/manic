import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import ArticleUnitListItem from './article_unit_list_item.jsx';

class ArticleUnitTen extends React.Component {
  constructor(props){
      super(props);
  }

  render(){
    return (
      <div className="article-unit-ten article-unit">
        <div className="article-unit-ten-top article-unit-list-top"></div>
        <div className="article-unit-ten-middle article-unit-middle">
          <div className="article-unit-ten-middle-header article-unit-middle-header">
            <h3>{this.props.header}</h3>
          </div>
        </div>
        <div className="article-unit-ten-bottom article-unit-list-bottom">
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
            <ArticleUnitListItem
              story={this.props.stories[3]}
              />
            <ArticleUnitListItem
              story={this.props.stories[4]}
              />
          </ul>
        </div>
        <div className="article-unit-ten-more article-unit-more">
          <div className="article-unit-ten-more-context article-unit-more-context verticle">
            <div className="article-unit-ten-more-button article-unit-more-button">
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i></div>
            <h2>{`more ${this.props.header}`}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ArticleUnitTen);

















// comment
