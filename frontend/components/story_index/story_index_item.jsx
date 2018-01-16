import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import StoryIndexContributerIndexItem from './story_index_contributer_index_item.jsx';

class StoryIndexItem extends React.Component {
  constructor(props){
      super(props);
      this.unixToDate = this.unixToDate.bind(this);
      this.toggleContributers = this.toggleContributers.bind(this);
  }

  unixToDate(num){
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let date = new Date(num*1000);
    let year = date.getFullYear();
    let month = months[date.getMonth()];
    let day = date.getDate();
    return month + '. ' + day + ', ' + year;
  }

  toggleContributers(story, contributers){
    let arrow = document.getElementById(story);
    document.getElementById(contributers).classList.toggle("show");
    if (arrow.classList.contains("fa-caret-down")){
      arrow.classList.remove("fa-caret-down");
      arrow.classList.add("fa-caret-up");
    } else {
      arrow.classList.remove("fa-caret-up");
      arrow.classList.add("fa-caret-down");
    }
  }

  render(){
    let commenters = Object.keys(this.props.commenters).map((commenter, i) =>{
      let commenterHash = {};
      commenterHash[`${commenter}`] = this.props.commenters[commenter];
      return (
        <StoryIndexContributerIndexItem
          key={i}
          rank={i+1}
          commenter={commenterHash}
        />
      );
    });

    return (
      <li className="story-index-item">
        <div className="story-index-item-wrapper">

          <div className="story-index-item-wrapper-left">
            <div className="story-index-item-rank">
              <h3>{this.props.rank}</h3>
            </div>
            <div className="story-index-item-date">
              <h2>{this.unixToDate(this.props.story.time)}</h2>
            </div>
            <div className="story-index-item-contributers">
              <h6>
                Top Contributers &nbsp; 
                <i id={`story-index-item-contributers-${this.props.rank}`}
                  className="fa fa-caret-up" aria-hidden="true"
                  onClick={(e) => this.toggleContributers(`story-index-item-contributers-${this.props.rank}`, `story-index-item-contributers-wrapper-${this.props.rank}`)}>
                </i>
              </h6>
            </div>
          </div>

          <div className="story-index-item-wrapper-right">
            <div className="story-index-item-title">
              <h1><a href={this.props.story.url}>
                {this.props.story.title}</a></h1>
            </div>
            <div className="story-index-item-author">
              <h2>By {this.props.story.by}</h2>
            </div>
          </div>

        </div>

        <div className="story-index-item-contributers-wrapper show" id={`story-index-item-contributers-wrapper-${this.props.rank}`}>
          <ul className="story-index-item-contributers-wrapper-list">
            {commenters}
          </ul>
        </div>
      </li>
    );
  }
}

export default withRouter(StoryIndexItem);

















// comment
