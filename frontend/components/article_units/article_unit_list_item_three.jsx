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
    let date = new Date(this.props.story.time*1000);
    let month = months[date.getMonth()];
    let day = date.getDate();
    let year = date.getFullYear();
    return (`${month} ${day}, ${year}`);
  }

  render(){
    return (
      <li className="article-unit-list-item-three">
        <div className="article-unit-list-item-three-bottom">
          <div className="horizontal">
            <div className="article-unit-image article-unit-list-item-image">
              <img src="frontend/images/world.jpg"></img>
            </div>
            <div className="article-unit-list-item-text">
              <div className="article-unit-author">
                <h2>{`${this.convertTime()} | ${this.props.story.by}`}</h2>
              </div>
              <div className="article-unit-title">
                <h6><a href={this.props.story.url}>
                  {this.props.story.title.length > 50 ?
                    `${this.props.story.title.split("").slice(0, 50).join("")}...` :
                  this.props.story.title}</a></h6>
              </div>
              <div className="article-unit-list-item-title">
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
