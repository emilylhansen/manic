import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import ArticleUnitListItem from './article_unit_list_item.jsx';
import ArticleUnitMore from './article_unit_more.jsx';

const ArticleUnitNine = props => {
  let items = props.stories.map((el, i) => (
    <ArticleUnitListItem
      key={i}
      story={el}
      />
  ));

  return (
    <div className="article-unit-nine article-unit">
      <div className="article-unit-list-top"></div>
      <div className="article-unit-middle">
        <div className="article-unit-middle-header">
          <h3>{props.header}</h3>
        </div>
      </div>
      <div className="article-unit-list-bottom">
        <ul>
          {items}
        </ul>
      </div>
      <ArticleUnitMore
        header={`more ${props.header}`}
        link={props.link}
        />
    </div>
  );
};

export default ArticleUnitNine;

















// comment
