import React from 'react';
import { Link } from 'react-router-dom';

import * as StoryApiUtil from '../../util/story_api_util';
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
      topStories: {}
    };
  }

  componentDidMount(){
    let topStories = {};

    StoryApiUtil.fetchTopStories().then(resultHash => {
      resultHash.articles.map((el, i) => {
        topStories[i] = el;
        this.setState({topStories: topStories});
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
    if(Object.keys(this.state.topStories).length > 9){
      articleOne = <ArticleUnitTwelve
        stories={[Object.values(this.state.topStories)[0],
                  Object.values(this.state.topStories)[1],
                  Object.values(this.state.topStories)[2],
                  Object.values(this.state.topStories)[3],
                  Object.values(this.state.topStories)[4]]}
        header={this.convertTitle()}
        />;
      articleTwo = <ArticleUnitNine
        stories={[Object.values(this.state.topStories)[0],
                  Object.values(this.state.topStories)[1],
                  Object.values(this.state.topStories)[2],
                  Object.values(this.state.topStories)[3],
                  Object.values(this.state.topStories)[4]]}
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
