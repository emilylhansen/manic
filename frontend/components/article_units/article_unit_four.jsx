import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ArticleUnitFour extends React.Component {
  constructor(props){
      super(props);
  }

  render(){
    return (
      <div className="article-unit-four article-unit jump">
        <div className="article-unit-top"></div>
        <div className="article-unit-bottom">
          <div className="horizontal">
            <div className="article-unit-text">
              <div className="article-unit-type">
                <h2>{this.props.story.source.name}</h2>
              </div>
              <div className="article-unit-title">
                <h6><a href={this.props.story.url}>
                  {this.props.story.title.length > 50 ?
                    `${this.props.story.title.split("").slice(0, 50).join("")}...` :
                  this.props.story.title}</a></h6>
              </div>
              <div className="article-unit-author">
                <h2>
                  {this.props.story.author ?
                  (this.props.story.author.length > 15 ?
                  `${this.props.story.author.split("").slice(0, 15).join("")}...` :
                  this.props.story.author) :
                  ""}
                </h2>
              </div>
            </div>
            <div className="article-unit-image">
              <img src={this.props.story.urlToImage ?
                        this.props.story.urlToImage :
                        "frontend/images/Image-not-available.jpg"}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ArticleUnitFour);

















// comment
