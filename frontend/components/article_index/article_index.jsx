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
    if (this.props.topHealth.length <= 0 ||
        this.props.topStories.length <= 0 ||
        this.props.topBusiness.length <= 0 ||
        this.props.topEntertainment.length <= 0 ||
        this.props.topGeneral.length <= 0 ||
        this.props.topScience.length <= 0 ||
        this.props.topSports.length <= 0 ||
        this.props.topTechnology.length <= 0) {
      return (
        <Loading/>
      );
    } else {
      let stories = this.getStories();
      return (
        <div>
          <NavigationBar
            header={this.props.location.pathname === "/" ? "" : this.props.match.params.categoryName}
            />
          <div className="article-index-background">
            <div className="article-index">
              <ArticleIndexGridOne
                stories={stories.slice(0, 8)}
                listStories={stories.slice(8, 11)}
                headers={["most popular"]}
                links={["#/most-popular"]}
                />

              <ArticleIndexGridTwo
                stories={stories.slice(11, 14)}
                />

              <ArticleIndexGridThree
               stories={stories.slice(14, 19)}
               listStories={stories.slice(0, 5)}
               headers={["most recent"]}
               links={["#/most-recent"]}
               />

              { this.props.location.pathname === "/" &&
                <ArticleIndexGridFour
                listStories={this.props.topBusiness.slice(0, 3).
                            concat(this.props.topEntertainment.slice(0, 3)).
                            concat(this.props.topTechnology.slice(0, 3))}
                headers={["Business", "Culture", "Gear"]}
                icons={["frontend/images/b.png", "frontend/images/c.png", "frontend/images/g.png"]}
                /> }

              { this.props.location.pathname === "/" &&
                <ArticleIndexGridFour
                listStories={this.props.topGeneral.slice(0, 3).
                            concat(this.props.topScience.slice(0, 3)).
                            concat(this.props.topSports.slice(0,3))}
                headers={["Ideas", "Science", "Security"]}
                icons={["frontend/images/i.png", "frontend/images/s.png", "frontend/images/s2.png"]}
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
