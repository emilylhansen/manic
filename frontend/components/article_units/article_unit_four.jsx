import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const ArticleUnitFour = props => {
  return (
    <div className="article-unit-four article-unit jump">
      <div className="article-unit-top"></div>
      <div className="article-unit-bottom">
        <div className="horizontal">
          <div className="article-unit-text">
            <div className="article-unit-type">
              <h2>{props.story.source.name}</h2>
            </div>
            <div className="article-unit-title">
              <h6>
                <Link to={{
                    pathname: `/story/${props.story.title.toLowerCase().split(/[^A-Za-z]/).join("")}`,
                    state: { story: props.story }}}
                    >
                  {props.story.title.length > 45 ?
                  `${props.story.title.split("").slice(0, 45).join("")}...` :
                  props.story.title}
                </Link>
              </h6>
            </div>
            <div className="article-unit-author">
              <h2>
                {props.story.author ?
                (props.story.author.length > 15 ?
                `${props.story.author.split("").slice(0, 15).join("")}...` :
                props.story.author) :
                ""}
              </h2>
            </div>
          </div>
          <div className="article-unit-image">
            <img src={props.story.urlToImage ?
                      props.story.urlToImage :
                      "frontend/images/Image-not-available.jpg"}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleUnitFour;

















// comment
