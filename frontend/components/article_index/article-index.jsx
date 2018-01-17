import React from 'react';
import { Link } from 'react-router-dom';

import * as MainUtil from '../../util/main_util';
import StoryIndexItem from './story_index_item.jsx';


class ArticleIndex extends React.Component{
  constructor(){
    super();
    this.state = {
      totalComments: {},
      topCommenters: {},
      stories: {}
    };
    this.topCommenters = this.topCommenters.bind(this);
  }

  componentDidMount(){
    let totalComments = {};
    let topCommenters = {};
    let stories = {};

    MainUtil.fetchTopStories().then(topStories => {
      topStories.slice(0, 30).map(storyId => {
        MainUtil.fetchStory(storyId).then(story => {
          stories[story.id] = story;
          if(story.kids !== undefined) {
            story.kids.map(commentId => {
              MainUtil.fetchComment(commentId).then(comment => {
                let commenter = comment.by;
                totalComments[commenter] = ++totalComments[commenter] || 1;
                if (topCommenters[storyId] === undefined){
                  topCommenters[storyId] = {};
                  topCommenters[storyId][commenter] = 1;
                } else {
                  topCommenters[storyId][commenter] = ++topCommenters[storyId][commenter] || 1;
                }
                this.setState({totalComments: totalComments, topCommenters:topCommenters, stories: stories});
              });
            });
          }
        });
      });
    });
  }

  topCommenters(storyId){
    let topCommenters = {};
    let story = this.state.topCommenters[storyId];
      let keys = Object.keys(story);
      keys.sort((a, b) => {
        return story[a] - story[b];
      });

      keys.slice(0, 10).forEach(k => {
         topCommenters[k] = this.state.totalComments[k];
      });

      return topCommenters;
  }

  render(){
    let items = Object.values(this.state.stories).map((story, i) => (
        <StoryIndexItem
          key={i}
          rank={i+1}
          story={story}
          commenters={this.state.topCommenters[story.id] !== undefined ? this.topCommenters(story.id) : {}}
          />
      ));

    return (
      <div className="story-background">
        <div className="story-background-wrapper">
          <div className="story-index">
            <div className="story-index-header">
              <div className="story-index-header-top"></div>
            </div>
            <ul className="story-index-list">{items}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleIndex;
