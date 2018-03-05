import React from 'react';
import { Link } from 'react-router-dom';

import * as StoryApiUtil from '../../util/story_api_util';
import ArticleUnitTwelve from '../article_units/article_unit_twelve.jsx';
import Loading from '../loading/loading.jsx';
import Footer from '../footer/footer.jsx';
import NavigationBar from '../navigation_bar/navigation_bar.jsx';

class MostPopular extends React.Component{
  constructor(){
    super();
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

  render(){
    let articleOne;
    if(Object.keys(this.state.topStories).length >= 20){
      let stories = [];
      for(let i = 0; i < 20; i++) {
        stories.push(Object.values(this.state.topStories)[i]);
      }
      articleOne = <ArticleUnitTwelve
        stories={stories}
        header="most popular"
        />;
    }

    if (articleOne === undefined) {
      return (
        <Loading/>
      );
    } else {
      return (
        <div>
          <NavigationBar
            header="most popular"
            />
          <div className="most-popular-background">
            <div className="most-popular-index horizontal">
              <div className="most-popular-index-content">
                {articleOne}
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

export default MostPopular;
