import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ArticleUnitListItem extends React.Component {
  constructor(props){
      super(props);
  }

  render(){
    return (
      <li className="article-unit-list-item">
        <div className="article-unit-list-item-bottom">
          <div className="horizontal">
            <div className="article-unit-image article-unit-list-item-image">
              <img src={this.props.story.urlToImage}></img>
            </div>
            <div className="article-unit-list-item-text">
              <div className="article-unit-list-item-type">
                <h2>{this.props.story.source.name}</h2>
              </div>
              <div className="article-unit-title article-unit-list-item-title">
                <h1><a href={this.props.story.url}>
                  {this.props.story.title.length > 50 ?
                    `${this.props.story.title.split("").slice(0, 50).join("")}...` :
                  this.props.story.title}</a></h1>
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
      </li>
    );
  }
}

export default withRouter(ArticleUnitListItem);

















// comment
