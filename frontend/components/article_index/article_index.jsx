import React from 'react';
import { Link } from 'react-router-dom';

import * as MainUtil from '../../util/main_util';
import ArticleUnitOne from '../article_units/article_unit_one.jsx';
import ArticleUnitTwo from '../article_units/article_unit_two.jsx';
import ArticleUnitThree from '../article_units/article_unit_three.jsx';
import ArticleUnitFour from '../article_units/article_unit_four.jsx';
import ArticleUnitFive from '../article_units/article_unit_five.jsx';
import ArticleUnitSix from '../article_units/article_unit_six.jsx';
import ArticleUnitSeven from '../article_units/article_unit_seven.jsx';
import ArticleUnitEight from '../article_units/article_unit_eight.jsx';
import ArticleUnitNine from '../article_units/article_unit_nine.jsx';
import ArticleUnitTen from '../article_units/article_unit_ten.jsx';
import ArticleUnitEleven from '../article_units/article_unit_eleven.jsx';

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
    let articleOne = "one";
    let articleTwo = "two";
    let articleThree = "three";
    let articleFour = "four";
    let articleFive = "five";
    let articleSix = "six";
    let articleSeven = "seven";
    let articleEight = "eight";
    let articleNine = "nine";
    let articleTen = "ten";
    let articleEleven = "eleven";

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
      articleSix = <ArticleUnitSix
        story={Object.values(this.state.bestStories)[5]}
        />;
      articleSeven = <ArticleUnitSeven
        story={Object.values(this.state.bestStories)[6]}
        />;
      articleEight = <ArticleUnitEight
        story={Object.values(this.state.bestStories)[7]}
        />;
      articleNine = <ArticleUnitNine
        stories={[Object.values(this.state.bestStories)[7],
          Object.values(this.state.bestStories)[7],
          Object.values(this.state.bestStories)[7]]}
        header="Culture"
        />;
      articleTen = <ArticleUnitTen
        stories={[Object.values(this.state.bestStories)[7],
          Object.values(this.state.bestStories)[7],
          Object.values(this.state.bestStories)[7],
          Object.values(this.state.bestStories)[7],
          Object.values(this.state.bestStories)[7]]}
        header="Gear"
        />;
      articleEleven = <ArticleUnitEleven
        stories={[Object.values(this.state.bestStories)[7],
          Object.values(this.state.bestStories)[7],
          Object.values(this.state.bestStories)[7]]}
        header="Science"
        />;
    }

    return (
      <div className="article-index-background">
        <div className="article-index">

          <div className="article-index-1 horizontal ">
            <div className="article-index-1-1 margin-right">
              <div className="article-index-1-1-1 horizontal">
                {articleOne}
                {articleTwo}
              </div>
              <div className="article-index-1-1-2 horizontal">
                <div className="article-index-1-1-2-1">
                  {articleThree}
                  {articleFour}
                </div>
                <div className="article-index-1-1-2-2">
                  {articleFive}
                </div>
              </div>
              <div className="article-index-1-1-2">
                {articleSix}
              </div>
            </div>
            <div className="article-index-1-2">
              {articleNine}
              {articleEleven}
            </div>
          </div>

          <div className="article-index-2">
            {articleEight}
          </div>

          <div className="article-index-3 horizontal">
            <div className="article-index-3-1">
              {articleTen}
            </div>
            <div className="article-index-3-2">
              <div className="article-index-3-2-1 horizontal">
                {articleTwo}
                {articleOne}
              </div>
              <div className="article-index-3-2-2 horizontal">
                <div className="article-index-3-2-2-1">
                  {articleFive}
                </div>
                <div className="article-index-3-2-2-2">
                  {articleThree}
                  {articleFour}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default ArticleIndex;
