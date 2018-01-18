import React from 'react';
import { Link } from 'react-router-dom';

import * as MainUtil from '../../util/main_util';
import ArticleUnitOne from '../article_units/article_unit_one.jsx';
import ArticleUnitTwo from '../article_units/article_unit_two.jsx';

class ArticleIndex extends React.Component{
  constructor(){
    super();
    this.state = {
      topStories: {},
      newStories: {},
      bestStories: {}
    };
  }

  componentDidMount(){
    let topStories = {};
    let newStories = {};
    let bestStories = {};

    MainUtil.fetchTopStories().then(stories => {
      stories.slice(0, 3).map(storyId => {
        MainUtil.fetchStory(storyId).then(story => {
          topStories[story.id] = story;
          this.setState({topStories: topStories});
        });
      });
    });

    MainUtil.fetchNewStories().then(stories => {
      stories.slice(0, 5).map(storyId => {
        MainUtil.fetchStory(storyId).then(story => {
          newStories[story.id] = story;
          this.setState({newStories: newStories});
        });
      });
    });

    MainUtil.fetchBestStories().then(stories => {
      stories.slice(0, 3).map(storyId => {
        MainUtil.fetchStory(storyId).then(story => {
          bestStories[story.id] = story;
          this.setState({bestStories: bestStories});
        });
      });
    });

    // this.setState({topStories: topStories, newStories: newStories, bestStories: bestStories});
  }



  render(){
    let articleOne = "hi";
    let articleTwo = "hi";

    if(Object.keys(this.state.bestStories).length > 2){
      articleOne = <ArticleUnitOne
        story={Object.values(this.state.bestStories)[0]}
        />;

      articleTwo = <ArticleUnitTwo
        story={Object.values(this.state.bestStories)[1]}
        />;
    }

    return (
      <div className="article-index-background">
        <div className="article-index">
          {articleOne}
          {articleTwo}
        </div>
      </div>
    );
  }
}

export default ArticleIndex;
