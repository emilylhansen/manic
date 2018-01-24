import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ArticleUnitTwo extends React.Component {
  constructor(props){
      super(props);
  }

  render(){
    return (
      <div className="article-unit-two article-unit jump">
        <div className="article-unit-top"></div>
        <div className="article-unit-bottom">
          <div>
            <div className="article-unit-image">
              <img src="frontend/images/four.png"></img>
            </div>
            <div>
              <div className="article-unit-type">
                <h2>{this.props.story.type}</h2>
              </div>
              <div className="article-unit-title">
                <h1><a href={this.props.story.url}>
                  {this.props.story.title.length > 60 ?
                    `${this.props.story.title.split("").slice(0, 60).join("")}...` :
                  this.props.story.title}</a></h1>
              </div>
              <div className="article-unit-author">
                <h2>{this.props.story.by}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ArticleUnitTwo);

















// comment
