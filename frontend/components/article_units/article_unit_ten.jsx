import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import ArticleUnitListItem from './article_unit_list_item.jsx';
import ArticleUnitMore from './article_unit_more.jsx';

class ArticleUnitTen extends React.Component {
  constructor(props){
      super(props);
  }

  render(){
    let items = this.props.stories.map((el, i) => (
      <ArticleUnitListItem
        key={i}
        story={this.props.stories[i]}
        />
    ));
    return (
      <div className="article-unit-ten article-unit">
        <div className="article-unit-list-top"></div>
        <div className="article-unit-middle">
          <div className="article-unit-middle-header">
            <h3>{this.props.header}</h3>
          </div>
        </div>
        <div className="article-unit-ten-bottom article-unit-list-bottom">
          <ul>
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

export default withRouter(ArticleUnitTen);

















// comment
