import React from 'react';
import { Link } from 'react-router-dom';

import * as MainUtil from '../../util/main_util';
import ArticleUnitNine from '../article_units/article_unit_nine.jsx';
import ArticleUnitTwelve from '../article_units/article_unit_twelve.jsx';
import Loading from '../loading/loading.jsx';
import Footer from '../footer/footer.jsx';
import NavigationBar from '../navigation_bar/navigation_bar.jsx';

class Category extends React.Component{
  constructor(){
    super();
    this.convertTitle = this.convertTitle.bind(this);
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
      stories.map(storyId => {
        MainUtil.fetchStory(storyId).then(story => {
          bestStories[story.id] = story;
          this.setState({bestStories: bestStories});
        });
      });
    });
  }

  convertTitle(){
    if(this.props.location.pathname === "/most-recent"){
      return "MOST RECENT";
    } else {
      return this.props.match.params.categoryName.toUpperCase();
    }
  }

  render(){
    let articleOne;
    let articleTwo;
    if(Object.keys(this.state.bestStories).length > 9){
      articleOne = <ArticleUnitTwelve
        stories={[Object.values(this.state.bestStories)[1],
                  Object.values(this.state.bestStories)[1],
                  Object.values(this.state.bestStories)[1],
                  Object.values(this.state.bestStories)[1],
                  Object.values(this.state.bestStories)[1]]}
        header={this.convertTitle()}
        />;
      articleTwo = <ArticleUnitNine
        stories={[Object.values(this.state.bestStories)[1],
                  Object.values(this.state.bestStories)[1],
                  Object.values(this.state.bestStories)[1],
                  Object.values(this.state.bestStories)[1],
                  Object.values(this.state.bestStories)[1]]}
        header="most popular"
        link="#/most-popular"
        />;
    }

    if (articleTwo === undefined) {
      return (
        <Loading/>
      );
    } else {
      return (
        <div>
          <NavigationBar
            header={this.convertTitle()}
            />
          <div className="category-background">
            <div className="category-index horizontal">
              <div className="margin-right">
                {articleOne}
              </div>
              <div>
                {articleTwo}
              </div>
            </div>
            <Footer
              pathname={this.props.location.pathname}
              />
          </div>
        </div>
      );
    }
  }
}

export default Category;
