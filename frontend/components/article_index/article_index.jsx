import React from 'react';
import { Link } from 'react-router-dom';

import * as StoryApiUtil from '../../util/story_api_util';
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
import ArticleIndexGridFour from './article_index_grid_four.jsx';
import NavigationBar from '../navigation_bar/navigation_bar.jsx';

class ArticleIndex extends React.Component{
  constructor(props){
    super(props);
    this.getStories = this.getStories.bind(this);
  }

  componentDidMount(){
    this.props.fetchTopStories();
    this.props.fetchTopBusiness();
    this.props.fetchTopEntertainment();
    this.props.fetchTopGeneral();
    this.props.fetchTopScience();
    this.props.fetchTopSports();
    this.props.fetchTopTechnology();
    this.props.fetchTopHealth();
  }

  getStories(){
    switch (this.props.match.params.categoryName) {
      case "business":
      return this.props.topBusiness;
      case "culture":
      return this.props.topEntertainment;
      case "gear":
      return this.props.topTechnology;
      case "ideas":
      return this.props.topGeneral;
      case "science":
      return this.props.topScience;
      case "security":
      return this.props.topSports;
      case "transportation":
      return this.props.topHealth;
      default:
      return this.props.topStories;
    }
  }

  render(){
    if (this.props.topHealth.length < 20) {
      return (
        <Loading/>
      );
    } else {
      return (
        <div>
          <NavigationBar
            header={this.props.location.pathname === "/" ? "" : this.props.match.params.categoryName}
            />
          <div className="article-index-background">
            <div className="article-index">
              <ArticleIndexGridOne
                stories={this.getStories().slice(0, 8)}
                listStories={this.getStories().slice(8, 11)}
                headers={["most popular"]}
                links={["#/most-popular"]}
                />

              <ArticleIndexGridTwo
                stories={this.getStories().slice(11, 14)}
                />

              <ArticleIndexGridThree
               stories={this.getStories().slice(14, 19)}
               listStories={this.getStories().slice(0, 5)}
               headers={["most recent"]}
               links={["#/most-recent"]}
               />

              { this.props.location.pathname === "/" &&
                <ArticleIndexGridFour
                listStories={this.props.topBusiness.slice(0, 3).
                            concat(this.props.topEntertainment.slice(0, 3)).
                            concat(this.props.topTechnology.slice(0, 3))}
                headers={["Business", "Culture", "Gear"]}
                /> }

              { this.props.location.pathname === "/" &&
                <ArticleIndexGridFour
                listStories={this.props.topGeneral.slice(0, 3).
                            concat(this.props.topScience.slice(0, 3)).
                            concat(this.props.topSports.slice(0,3))}
                headers={["Ideas", "Science", "Security"]}
                /> }

              { this.props.location.pathname === "/" &&
                <div className="horizontal">
                  <div>
                    <ArticleUnitSubscribe/>
                  </div>
                </div> }

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

export default ArticleIndex;
