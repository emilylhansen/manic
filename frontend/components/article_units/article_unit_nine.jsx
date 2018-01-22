import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import ArticleUnitListItem from './article_unit_list_item.jsx';
import ArticleUnitMore from './article_unit_more.jsx';

class ArticleUnitNine extends React.Component {
  constructor(props){
      super(props);
  }

  render(){
    let items = this.props.stories.map((el, i) => (
      <ArticleUnitListItem
        key={i}
        story={el}
        />
    ));

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

export default withRouter(ArticleUnitNine);

















// comment
