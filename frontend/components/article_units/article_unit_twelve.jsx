import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import ArticleUnitListItemThree from './article_unit_list_item_three.jsx';
import ArticleUnitMore from './article_unit_more.jsx';

const ArticleUnitTwelve = props => {
  let items = props.stories.map((el, i) => (
    <ArticleUnitListItemThree
      key={i}
      story={el}
      />
  ));
  return (
    <div className="article-unit-twelve article-unit">
      <div className="article-unit-list-top"></div>
      <div className="article-unit-middle">
        <div className="article-unit-middle-header horizontal">
          {
            props.location.pathname.includes("search") &&
            <div className="article-unit-middle-header-icon">
            <i className="fa fa-search" aria-hidden="true"></i>
            </div>
          }
          <div className="article-unit-middle-header-text">
            <h3>{props.header}</h3>
          </div>
        </div>
      </div>
      {
        props.location.pathname.includes("search") &&
        <div className="article-unit-sort">
          <div className="article-unit-sort-text horizontal">
            <div className="article-unit-sort-text-results">
              <h2>results</h2>
            </div>
            <div className="article-unit-sort-text-options horizontal">
              <h2>sort by:&nbsp;</h2>
              <h2 className="article-unit-sort-text-options-oldest"
                  onClick={() => props.handleClick("popular")}>
                popular&nbsp;
              </h2>
              <h2 className="article-unit-sort-text-options-newest"
                  onClick={() => props.handleClick("newest")}>
                newest&nbsp;
              </h2>
              <h2 className="article-unit-sort-text-options-relevance"
                  onClick={() => props.handleClick("relevance")}>
                relevance
              </h2>
            </div>
          </div>
        </div>
      }
      <div className="article-unit-list-bottom">
        <ul>
          {items}
        </ul>
      </div>
    </div>
  );
};

export default withRouter(ArticleUnitTwelve);

















// comment
