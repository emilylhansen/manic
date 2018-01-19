import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ArticleUnitSeven extends React.Component {
  constructor(props){
      super(props);
  }

  render(){
    return (
      <div className="article-unit-seven article-unit">
        <div className="article-unit-seven-top article-unit-top"></div>
        <div className="article-unit-seven-bottom article-unit-bottom">
          <div className="article-unit-seven-bottom-context horizontal">
            <div className="article-unit-seven-bottom-context-text">
              <div className="article-unit-seven-bottom-context-text-type">
                <h2>{this.props.story.type}</h2>
              </div>
              <div className="article-unit-seven-bottom-context-text-title article-unit-title">
                <h4><a href={this.props.story.url}>
                  {this.props.story.title.length > 25 ?
                    `${this.props.story.title.split("").slice(0, 25).join("")}...` :
                  this.props.story.title}</a></h4>
              </div>
              <div className="article-unit-seven-bottom-context-text-author article-unit-author">
                <h2>{this.props.story.by}</h2>
              </div>
            </div>
            <div className="article-unit-seven-bottom-context-image article-unit-image">
              <img src="frontend/images/world.jpg"></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ArticleUnitSeven);

















// comment
