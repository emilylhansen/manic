import React from 'react';
import { Link } from 'react-router-dom';

import * as StoryApiUtil from '../../util/story_api_util';
import ArticleUnitNine from '../article_units/article_unit_nine.jsx';
import ArticleUnitTwelve from '../article_units/article_unit_twelve.jsx';
import Loading from '../loading/loading.jsx';
import Footer from '../footer/footer.jsx';
import NavigationBar from '../navigation_bar/navigation_bar.jsx';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      stories: this.props.stories
    };
    this.searchTerm = this.props.searchTerm ? this.props.searchTerm : this.props.match.params.searchTerm;
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.props.searchStories(this.searchTerm);
    this.props.fetchTopStories();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.stories !== this.props.stories) {
      this.setState({stories: nextProps.stories});
    }
  }

  handleClick(option){
    switch (option) {
      case "popular":
      this.props.searchPopularity(this.searchTerm);
      break;
      case "newest":
      this.props.searchNewest(this.searchTerm);
      break;
      case "relevancy":
      this.props.searchRelevancy(this.searchTerm);
      break;
      default:

    }
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
            header={`Search: "${this.searchTerm}"`}
            />
          <div className="category-background">
            <div className="category-index horizontal">
              <div className="margin-right">
                <ArticleUnitTwelve
                  stories={this.state.stories.slice(0, 20)}
                  header={this.searchTerm}
                  handleClick={this.handleClick}
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
