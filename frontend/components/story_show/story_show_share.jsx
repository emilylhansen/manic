import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import StoryShowShareItem from './story_show_share_item.jsx';

class StoryShowShare extends React.Component {
  constructor(props){
      super(props);
  }

  render(){
    let media = ["share", "tweet", "comment", "email"];
    let images = ["frontend/images/facebook.png",
                  "frontend/images/twitter.png",
                  "frontend/images/comment.png",
                  "frontend/images/email.png"];
    let items = media.map((el, i) => (
      <StoryShowShareItem
        key={i}
        header={el}
        image={images[i]}
        />
    ));

    return (
      <div className="story-show-share">
        <div className="article-unit-list-top"></div>
        <div className="article-unit-middle">
          <div className="article-unit-middle-header">
            <h3>share</h3>
          </div>
        </div>
        <div className="article-unit-list-bottom">
          <ul>
            {items}
          </ul>
        </div>
      </div>

    );
  }
}

export default withRouter(StoryShowShare);

















// comment
