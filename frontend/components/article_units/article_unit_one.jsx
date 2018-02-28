import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ArticleUnitOne extends React.Component {
  constructor(props){
      super(props);
  }

  render(){
    // <img src="frontend/images/seven.png"></img>
    return (
      <div className="article-unit-one article-unit jump">
        <div className="article-unit-top"></div>
        <div className="article-unit-bottom">
          <div className="article-unit-bottom-context">
            <div className="article-unit-image">
              <img src={this.props.story.urlToImage}></img>
            </div>
            <div>
              <div className="article-unit-type">
                <h2>{this.props.story.source.name}</h2>
              </div>
              <div className="article-unit-title">
                <h1><a href={this.props.story.url}>
                  {this.props.story.title.length > 60 ?
                    `${this.props.story.title.split("").slice(0, 90).join("")}...` :
                  this.props.story.title}</a></h1>
              </div>
              <div className="article-unit-author">
                <h2>{this.props.story.author}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ArticleUnitOne);

















// comment
