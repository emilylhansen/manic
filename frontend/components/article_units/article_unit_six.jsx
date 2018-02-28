import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ArticleUnitSix extends React.Component {
  constructor(props){
      super(props);
  }

  render(){
    return (
      <div className="article-unit-six article-unit jump">
        <div className="article-unit-top"></div>
        <div className="article-unit-bottom">
          <div className="horizontal">
            <div className="article-unit-image">
              <img src={this.props.story.urlToImage}></img>
            </div>
            <div className="article-unit-text">
              <div className="article-unit-type">
                <h2>{this.props.story.source.name}</h2>
              </div>
              <div className="article-unit-title">
                <h4><a href={this.props.story.url}>
                  {this.props.story.title.length > 120 ?
                    `${this.props.story.title.split("").slice(0, 120).join("")}...` :
                  this.props.story.title}</a></h4>
              </div>
              <div className="article-unit-author">
                <h2>
                  {this.props.story.author ?
                  (this.props.story.author.length > 20 ?
                  `${this.props.story.author.split("").slice(0, 20).join("")}...` :
                  this.props.story.author) :
                  ""}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ArticleUnitSix);

















// comment
