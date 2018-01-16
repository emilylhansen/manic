import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class StoryIndexContributerIndexItem extends React.Component {
  constructor(props){
      super(props);
  }

  render(){
    return (
      <li className="story-index-item-contributers-list-item">
        <div className="story-index-item-contributers-list-item-wrapper">
          <div className="story-index-item-contributers-list-item-wrapper-left">
            <h5>{this.props.rank}</h5>
          </div>
          <div className="story-index-item-contributers-list-item-wrapper-right">
            <div className="story-index-item-contributers-list-item-wrapper-right-commenter">
              <h6>{Object.keys(this.props.commenter)[0]}</h6>
            </div>
            <div className="story-index-item-contributers-list-item-wrapper-right-comments">
              <h4>{Object.values(this.props.commenter)[0]} {Object.values(this.props.commenter)[0] > 1 ? "posts" : "post"} in Top Stories</h4>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default withRouter(StoryIndexContributerIndexItem);

















// comment
