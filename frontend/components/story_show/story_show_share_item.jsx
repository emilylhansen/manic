import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const StoryShowShareItem= (props) => {
  return (
    <div className="story-show-share-item">
      <div className="story-show-share-item-contents horizontal">
        <div className="story-show-share-item-img">
          <img src={props.image}></img>
        </div>
        <div className="story-show-share-item-text">
          <h2>{props.header}</h2>
        </div>
      </div>
    </div>
  );
};

export default StoryShowShareItem;
