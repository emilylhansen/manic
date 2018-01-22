import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ArticleUnitListItemThree extends React.Component {
  constructor(props){
      super(props);
      this.convertTime = this.convertTime.bind(this);
  }

  convertTime(){
    let months = ["January", "February", "March",
                  "April", "May", "June",
                  "July", "August", "September",
                  "October", "November", "December"];
    let date = new Date(this.props.story.times*1000);
    let month = months[date.getMonth()];
    let day = date.getDate();
    let year = date.getFullYear();
    return (`${month} ${day}, ${year}`);
  }

  render(){
    return (
      <li className="article-unit-list-item-three article-unit-list-item">
        <div className="article-unit-list-item-three-bottom article-unit-list-item-three-bottom">
          <div className="article-unit-list-item-three-bottom-context horizontal">
            <div className="article-unit-list-item-three-bottom-context-image article-unit-image article-unit-list-item-three-image">
              <img src="frontend/images/world.jpg"></img>
            </div>
            <div className="article-unit-list-item-three-bottom-context-text article-unit-list-item-three-bottom-context-text">
              <div className="article-unit-list-item-three-bottom-context-text-type">
                <h2>`${this.convertTime()} | ${this.props.story.by}`</h2>
              </div>
              <div className="article-unit-list-item-three-bottom-context-text-title article-unit-title article-unit-list-item-three-title">
                <h6><a href={this.props.story.url}>
                  {this.props.story.title.length > 50 ?
                    `${this.props.story.title.split("").slice(0, 50).join("")}...` :
                  this.props.story.title}</a></h6>
              </div>
              <div className="article-unit-list-item-three-bottom-context-text-author article-unit-author">
                <h1>{this.props.story.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default withRouter(ArticleUnitListItemThree);

















// comment
