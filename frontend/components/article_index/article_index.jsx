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
import ArticleUnitEleven from '../article_units/article_unit_eleven.jsx';
import ArticleUnitSubscribe from '../article_units/article_unit_subscribe.jsx';
import Footer from '../footer/footer.jsx';
import Loading from '../loading/loading.jsx';
import ArticleIndexGridOne from './article_index_grid_one.jsx';
import ArticleIndexGridTwo from './article_index_grid_two.jsx';
import ArticleIndexGridThree from './article_index_grid_three.jsx';

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
  }

  render(){
    let articleOne;
    let articleTwo;
    let articleThree;
    let articleFour;
    let articleFive;
    let articleSix;
    let articleSeven;
    let articleEight;
    let articleNine;
    let articleTen;
    let articleEleven;
    let articleSubscribe;

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
        header="most popular"
        />;
      articleTen = <ArticleUnitNine
        stories={[Object.values(this.state.bestStories)[7],
          Object.values(this.state.bestStories)[7],
          Object.values(this.state.bestStories)[7],
          Object.values(this.state.bestStories)[7],
          Object.values(this.state.bestStories)[7]]}
        header="most recent"
        />;
      articleEleven = <ArticleUnitEleven
        stories={[Object.values(this.state.bestStories)[7],
          Object.values(this.state.bestStories)[7],
          Object.values(this.state.bestStories)[7]]}
        header="Science"
        />;
      articleSubscribe = <ArticleUnitSubscribe/>;
    }

    if (articleSubscribe === undefined) {
      return (
        <Loading/>
      );
    } else {
      return (
        <div className="article-index-background">
          <div className="article-index">
            <ArticleIndexGridOne
              articles={{one: articleOne,
                        two: articleTwo,
                        three: articleThree,
                        four: articleFour,
                        five: articleFive,
                        six: articleSix,
                        nine: articleNine,
                        eleven: articleEleven}}
              />

            <ArticleIndexGridTwo
              articles={{eight: articleEight}}
              />

            <ArticleIndexGridThree
              articles={{ten: articleTen,
                        two: articleTwo,
                        one: articleOne,
                        five: articleFive,
                        three: articleThree,
                        four: articleFour}}
              />

            <div className="horizontal">
              <div>
                {articleSubscribe}
              </div>
            </div>

          </div>
          <Footer
            pathname={this.props.location.pathname}
            />
        </div>
      );
    }
  }
}

export default ArticleIndex;
