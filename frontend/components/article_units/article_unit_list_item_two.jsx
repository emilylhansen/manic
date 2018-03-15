import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const ArticleUnitListItemTwo = props => {
    return (
      <li className="article-unit-list-item-two">
        <div className="article-unit-list-item-two-bottom">
          <div>
            <div className="article-unit-image article-unit-list-item-image">
              <img src={props.story.urlToImage ?
                        props.story.urlToImage :
                        "frontend/images/Image-not-available.jpg"}></img>
            </div>
            <div className="article-unit-list-item-text">
              <div className="article-unit-title">
                <h6>
                  <Link to={{
                      pathname: `/story/${props.story.title.toLowerCase().split(/[^A-Za-z]/).join("")}`,
                      state: { story: props.story }}}
                      >
                    {props.story.title.length > 30 ?
                    `${props.story.title.split("").slice(0, 30).join("")}...` :
                    props.story.title}
                  </Link>
                </h6>
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

export default ArticleUnitListItemTwo;

















// comment
