import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ArticleUnitMore from './article_unit_more.jsx';

const ArticleUnitSubscribeItemTwo = props => {
  return (
    <li className="article-unit-subscribe-item-two">
      <div className="article-unit-bottom">
        <div className="article-unit-subscribe-item-top">
          <h3>{props.header.toUpperCase()}</h3>
        </div>
        <div className="article-unit-subscribe-item-bottom">
          <div className="article-unit-list-item-title">
            <h1>{props.text}</h1>
          </div>
          <div className="article-unit-input">
            <input type="email" name="email"
              value={props.email}
              onChange={props.handleInput('email')}
              placeholder="Enter your email"/>
          </div>
        </div>
        <div className="article-unit-subscribe-item-more">
        </div>
      </div>
      <ArticleUnitMore
        header={props.action}
        />
    </li>
  );
};

export default ArticleUnitSubscribeItemTwo;

















// comment
