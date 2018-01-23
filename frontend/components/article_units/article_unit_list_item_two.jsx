import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ArticleUnitListItemTwo extends React.Component {
  constructor(props){
      super(props);
  }

  render(){
    return (
      <li className="article-unit-list-item-two">
        <div className="article-unit-list-item-two-bottom">
          <div>
            <div className="article-unit-image article-unit-list-item-image">
              <img src="frontend/images/world.jpg"></img>
            </div>
            <div className="article-unit-list-item-text">
              <div className="article-unit-title">
                <h6><a href={this.props.story.url}>
                  {this.props.story.title.length > 30 ?
                    `${this.props.story.title.split("").slice(0, 30).join("")}...` :
                  this.props.story.title}</a></h6>
              </div>
              <div className="article-unit-author">
                <h2>{this.props.story.by}</h2>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default withRouter(ArticleUnitListItemTwo);

















// comment
