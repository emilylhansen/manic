import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const ArticleUnitListItemThree = props => {

  const convertTime = () => {
    let months = ["January", "February", "March",
                  "April", "May", "June",
                  "July", "August", "September",
                  "October", "November", "December"];
    let date = props.story.publishedAt.split(/-|T|Z|:|\./);
    let month = months[parseInt(date[1])];
    let day = date[2];
    let year = date[0];
    return (`${month} ${day}, ${year}`);
  };

  return (
    <li className="article-unit-list-item-three">
      <div className="article-unit-list-item-three-bottom">
        <div className="horizontal">
          <div className="article-unit-image article-unit-list-item-image">
            <img src={props.story.urlToImage ?
                      props.story.urlToImage :
                      "frontend/images/Image-not-available.jpg"}></img>
          </div>
          <div className="article-unit-list-item-text">
            <div className="article-unit-author">
              <h2>{convertTime()}
                {props.story.author ?
                (props.story.author.length > 35 ?
                `| ${props.story.author.split("").slice(0, 35).join("")}...` :
                `| ${props.story.author}`) :
                ""}
              </h2>
            </div>
            <div className="article-unit-title">
              <h6>
                <Link to={{
                    pathname: `/story/${props.story.title.toLowerCase().split(/[^A-Za-z]/).join("")}`,
                    state: { story: props.story }}}
                    >
                  {props.story.title.length > 50 ?
                  `${props.story.title.split("").slice(0, 50).join("")}...` :
                  props.story.title}
                </Link>
              </h6>
            </div>
            <div className="article-unit-list-item-title">
              <h1>{props.story.title}</h1>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default withRouter(ArticleUnitListItemThree);

















// comment
