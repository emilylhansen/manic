import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import ArticleUnitListItemThree from './article_unit_list_item_three.jsx';
import ArticleUnitMore from './article_unit_more.jsx';

class ArticleUnitTwelve extends React.Component {
  constructor(props){
      super(props);
  }

  render(){
    let items = this.props.stories.map((el, i) => (
      <ArticleUnitListItemThree
        key={i}
        story={el}
        />
    ));
    return (
      <div className="article-unit-twelve article-unit">
        <div className="article-unit-list-top"></div>
        <div className="article-unit-middle">
          <div className="article-unit-middle-header">
            <h3>{this.props.header}</h3>
          </div>
        </div>
        <div className="article-unit-list-bottom">
          <ul>
            {items}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(ArticleUnitTwelve);

















// comment
