import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ArticleUnitThree extends React.Component {
  constructor(props){
      super(props);
  }

  render(){
    return (
      <div className="article-unit-three article-unit">
        <div className="article-unit-three-top article-unit-top"></div>
        <div className="article-unit-three-bottom article-unit-bottom">
          <div className="article-unit-three-bottom-context horizontal">
            <div className="article-unit-three-bottom-context-image article-unit-image">
              <img src="frontend/images/world.jpg"></img>
            </div>
            <div className="article-unit-three-bottom-context-text">
              <div className="article-unit-three-bottom-context-text-type">
                <h2>{this.props.story.type}</h2>
              </div>
              <div className="article-unit-three-bottom-context-text-title article-unit-title">
                <h6><a href={this.props.story.url}>
                  {this.props.story.title.length > 70 ?
                    `${this.props.story.title.split("").slice(0, 70).join("")}...` :
                  this.props.story.title}</a></h6>
              </div>
              <div className="article-unit-three-bottom-context-text-author article-unit-author">
                <h2>{this.props.story.by}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ArticleUnitThree);

















// comment
