import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ArticleUnitListItem extends React.Component {
  constructor(props){
      super(props);
  }

  render(){
    return (
      <li className="article-unit-list-item article-unit-list-item">
        <div className="article-unit-list-item-bottom article-unit-list-item-bottom">
          <div className="article-unit-list-item-bottom-context verticle">
            <div className="article-unit-list-item-bottom-context-image article-unit-image article-unit-list-item-image">
              <img src="frontend/images/world.jpg"></img>
            </div>
            <div className="article-unit-list-item-bottom-context-text article-unit-list-item-bottom-context-text">
              <div className="article-unit-list-item-bottom-context-text-type">
                <h2>{this.props.story.type}</h2>
              </div>
              <div className="article-unit-list-item-bottom-context-text-title article-unit-title">
                <h1><a href={this.props.story.url}>
                  {this.props.story.title.length > 25 ?
                    `${this.props.story.title.split("").slice(0, 25).join("")}...` :
                  this.props.story.title}</a></h1>
              </div>
              <div className="article-unit-list-item-bottom-context-text-author article-unit-author">
                <h2>{this.props.story.by}</h2>
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
