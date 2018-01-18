import React from 'react';
import { Link } from 'react-router-dom';

import * as MainUtil from '../../util/main_util';
import ArticleUnitOne from '../article_units/article_unit_one.jsx';
import ArticleUnitTwo from '../article_units/article_unit_two.jsx';
import ArticleUnitThree from '../article_units/article_unit_three.jsx';
import ArticleUnitFour from '../article_units/article_unit_four.jsx';
import ArticleUnitFive from '../article_units/article_unit_five.jsx';
import ArticleUnitSix from '../article_units/article_unit_six.jsx';

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
      stories.slice(0, 10).map(storyId => {
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
    let articleThree = "hi";
    let articleFour = "hi";
    let articleFive = "hi";
    let articleSix = "hi";

    if(Object.keys(this.state.bestStories).length > 9){
      articleOne = <ArticleUnitOne
        story={Object.values(this.state.bestStories)[0]}
        />;

      articleTwo = <ArticleUnitTwo
        story={Object.values(this.state.bestStories)[1]}
        />;

      articleThree = <ArticleUnitThree
        story={Object.values(this.state.bestStories)[2]}
        />;

      articleFour = <ArticleUnitFour
        story={Object.values(this.state.bestStories)[3]}
        />;

      articleFive = <ArticleUnitFive
        story={Object.values(this.state.bestStories)[4]}
        />;

      articleFive = <ArticleUnitSix
        story={Object.values(this.state.bestStories)[5]}
        />;
    }

    return (
      <div className="article-index-background">
        <div className="article-index">
          {articleOne}
          {articleTwo}
          {articleThree}
          {articleFour}
          {articleFive}
          {articleSix}
        </div>
      </div>
    );
  }
}

export default ArticleIndex;
