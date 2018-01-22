import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import ArticleUnitListItem from './article_unit_list_item.jsx';
import ArticleUnitMore from './article_unit_more.jsx';

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
        <ArticleUnitMore
          header={this.props.header}
          />
      </div>
    );
  }
}

export default withRouter(ArticleUnitTen);

















// comment
