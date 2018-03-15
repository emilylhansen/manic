import React from 'react';
import { Link } from 'react-router-dom';

const ArticleUnitMore = props => {
  return (
    <div className="article-unit-more">
      <a href={props.link}
        onClick={()=> window.location.reload()}>
        <div className="article-unit-more-context horizontal">
          <div className="article-unit-more-button">
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i></div>
            <h2>{props.header}</h2>
        </div>
      </a>
    </div>
  );
};

export default ArticleUnitMore;
