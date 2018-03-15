import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const ArticleUnitListItem = props => {
  return (
    <li className="article-unit-list-item">
      <div className="article-unit-list-item-bottom">
        <div className="horizontal">
          <div className="article-unit-image article-unit-list-item-image">
            <img src={props.story.urlToImage ?
                      props.story.urlToImage :
                      "frontend/images/Image-not-available.jpg"}></img>
          </div>
          <div className="article-unit-list-item-text">
            <div className="article-unit-list-item-type">
              <h2>{props.story.source.name}</h2>
            </div>
            <div className="article-unit-title article-unit-list-item-title">
              <h1>
                <Link to={{
                    pathname: `/story/${props.story.title.toLowerCase().split(/[^A-Za-z]/).join("")}`,
                    state: { story: props.story }}}
                    >
                  {props.story.title.length > 50 ?
                  `${props.story.title.split("").slice(0, 50).join("")}...` :
                  props.story.title}
                </Link>
              </h1>
            </div>
            <div className="article-unit-author">
              <h2>
                {props.story.author ?
                (props.story.author.length > 20 ?
                `${props.story.author.split("").slice(0, 20).join("")}...` :
                props.story.author) :
                ""}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ArticleUnitListItem;

















// comment
