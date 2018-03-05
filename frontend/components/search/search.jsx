import React from 'react';
import { Link } from 'react-router-dom';

import * as StoryApiUtil from '../../util/story_api_util';
import ArticleUnitNine from '../article_units/article_unit_nine.jsx';
import ArticleUnitTwelve from '../article_units/article_unit_twelve.jsx';
import Loading from '../loading/loading.jsx';
import Footer from '../footer/footer.jsx';
import NavigationBar from '../navigation_bar/navigation_bar.jsx';

class Search extends React.Component{
  constructor(){
    super();
  }

  componentDidMount(){
    this.props.searchStories(this.props.searchTerm);
    this.props.fetchTopStories();
  }

  render(){
    if (this.props.topStories.length <= 0 ||
        this.props.stories.length <= 0) {
      return (
        <Loading/>
      );
    } else {
      return (
        <div>
          <NavigationBar
            header={`Search: "${this.props.searchTerm}"`}
            />
          <div className="category-background">
            <div className="category-index horizontal">
              <div className="margin-right">
                <ArticleUnitTwelve
                  stories={this.props.stories.slice(0, 20)}
                  header={this.props.searchTerm}
                  />
              </div>
              <div>
                <ArticleUnitNine
                  stories={this.props.topStories.slice(0, 5)}
                  header="most popular"
                  link="#/most-popular"
                  />
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

export default Search;