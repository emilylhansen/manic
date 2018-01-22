import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import ArticleUnitListItem from './article_unit_list_item.jsx';
import ArticleUnitListItemTwo from './article_unit_list_item_two.jsx';
import ArticleUnitMore from './article_unit_more.jsx';

class ArticleUnitEleven extends React.Component {
  constructor(props){
      super(props);
  }

  render(){
    let items = this.props.stories.slice(1).map((el, i) => (
      <ArticleUnitListItem
        key={i}
        story={this.props.stories[i]}
        />
    ));

    return (
      <div className="article-unit-eleven article-unit">
        <div className="article-unit-eleven-top article-unit-list-top"></div>
        <div className="article-unit-eleven-middle article-unit-middle">
          <div className="article-unit-eleven-middle-header article-unit-middle-header horizontal">
            <div className="article-unit-eleven-middle-header-icon">
              <i className="fa fa-bullseye" aria-hidden="true"></i></div>
            <h3>{this.props.header}</h3>
          </div>
        </div>
        <div className="article-unit-eleven-bottom article-unit-list-bottom">
          <ul>
            <ArticleUnitListItemTwo
              story={this.props.stories[0]}
              />
            {items}
          </ul>
        </div>
        <ArticleUnitMore
          header={this.props.header}
          />
      </div>
    );
  }
}

export default withRouter(ArticleUnitEleven);

















// comment
