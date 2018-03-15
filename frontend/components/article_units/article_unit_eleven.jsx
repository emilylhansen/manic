import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import ArticleUnitListItem from './article_unit_list_item.jsx';
import ArticleUnitListItemTwo from './article_unit_list_item_two.jsx';
import ArticleUnitMore from './article_unit_more.jsx';

const ArticleUnitEleven = props => {
  let items = props.stories.slice(1).map((el, i) => (
    <ArticleUnitListItem
      key={i}
      story={props.stories[i+1]}
      />
  ));

  return (
    <div className="article-unit-eleven article-unit">
      <div className="article-unit-eleven-top article-unit-list-top"></div>
      <div className="article-unit-eleven-middle article-unit-middle">
        <div className="article-unit-eleven-middle-header article-unit-middle-header horizontal">
          <div className="article-unit-eleven-middle-header-icon">
            <img src={props.icon}></img>
          </div>
          <h3>{props.header}</h3>
        </div>
      </div>
      <div className="article-unit-eleven-bottom article-unit-list-bottom">
        <ul>
          <ArticleUnitListItemTwo
            story={props.stories[0]}
            />
          {items}
        </ul>
      </div>
      <ArticleUnitMore
        header={`more ${props.header}`}
        link={`#/category/${props.header.toLowerCase()}`}
        />
    </div>
  );
};

export default ArticleUnitEleven;

















// comment
