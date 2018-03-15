import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const ArticleUnitFive = props => {
  return (
    <div className="article-unit-five article-unit jump">
      <div className="article-unit-top"></div>
      <div className="article-unit-bottom">
        <div className="article-unit-five-bottom-context">
          <div className="article-unit-image">
            <img src={props.story.urlToImage ?
                      props.story.urlToImage :
                      "frontend/images/Image-not-available.jpg"}></img>
          </div>
          <div>
            <div className="article-unit-type">
              <h2>{props.story.source.name}</h2>
            </div>
            <div className="article-unit-title">
              <h1>
                <Link to={{
                    pathname: `/story/${props.story.title.toLowerCase().split(/[^A-Za-z]/).join("")}`,
                    state: { story: props.story }}}
                    >
                  {props.story.title.length > 70 ?
                  `${props.story.title.split("").slice(0, 70).join("")}...` :
                  props.story.title}
                </Link>
              </h1>
            </div>
            <div className="article-unit-author">
              <h2>
                {props.story.author ?
                (props.story.author.length > 30 ?
                `${props.story.author.split("").slice(0, 30).join("")}...` :
                props.story.author) :
                ""}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleUnitFive;

















// comment
