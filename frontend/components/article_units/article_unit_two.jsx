import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ArticleUnitTwo extends React.Component {
  constructor(props){
      super(props);
  }

  render(){
    return (
      <div className="article-unit-two article-unit">
        <div className="article-unit-two-top article-unit-top"></div>
        <div className="article-unit-two-bottom article-unit-bottom">
          <div className="article-unit-two-bottom-context">
            <div className="article-unit-two-bottom-context-image ">
              <img src="frontend/images/world.jpg"></img>
            </div>
            <div className="article-unit-two-bottom-context-text">
              <div className="article-unit-two-bottom-context-text-type">
                <h2>{this.props.story.type}</h2>
              </div>
              <div className="article-unit-two-bottom-context-text-title">
                <h1><a href={this.props.story.url}>{this.props.story.title}</a></h1>
              </div>
              <div className="article-unit-two-bottom-context-text-author">
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
