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
import ArticleIndexGridFour from './article_index_grid_four.jsx';
import NavigationBar from '../navigation_bar/navigation_bar.jsx';

class ArticleIndex extends React.Component{
  constructor(){
    super();
    this.state = {
      topStories: [],
      topBusiness: [],
      topEntertainment: [],
      topGeneral: [],
      topHealth: [],
      topScience: [],
      topSports: [],
      topTechnology: []
    };
  }

  componentDidMount(){
    let topStories = [];
    let topBusiness = [];
    let topEntertainment = [];
    let topGeneral = [];
    let topHealth = [];
    let topScience = [];
    let topSports = [];
    let topTechnology = [];

    MainUtil.fetchTopStories().then(resultHash => {
      resultHash.articles.map((el) => {
        topStories.push(el);
        this.setState({topStories: topStories});
      });
    });

    MainUtil.fetchTopBusiness().then(resultHash => {
      resultHash.articles.map((el) => {
        topBusiness.push(el);
        this.setState({topBusiness: topBusiness});
      });
    });

    MainUtil.fetchTopEntertainment().then(resultHash => {
      resultHash.articles.map((el) => {
        topEntertainment.push(el);
        this.setState({topEntertainment: topEntertainment});
      });
    });

    MainUtil.fetchTopGeneral().then(resultHash => {
      resultHash.articles.map((el) => {
        topGeneral.push(el);
        this.setState({topGeneral: topGeneral});
      });
    });

    MainUtil.fetchTopHealth().then(resultHash => {
      resultHash.articles.map((el) => {
        topHealth.push(el);
        this.setState({topHealth: topHealth});
      });
    });

    MainUtil.fetchTopScience().then(resultHash => {
      resultHash.articles.map((el) => {
        topScience.push(el);
        this.setState({topScience: topScience});
      });
    });

    MainUtil.fetchTopSports().then(resultHash => {
      resultHash.articles.map((el) => {
        topSports.push(el);
        this.setState({topSports: topSports});
      });
    });

    MainUtil.fetchTopTechnology().then(resultHash => {
      resultHash.articles.map((el) => {
        topTechnology.push(el);
        this.setState({topTechnology: topTechnology});
      });
    });

  }

  render(){
    if (this.state.topTechnology.length < 20) {
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
                stories={this.state.topStories.slice(0, 8)}
                listStories={this.state.topStories.slice(8, 11)}
                headers={["most popular"]}
                links={["#/most-popular"]}
                />

              <ArticleIndexGridTwo
                stories={this.state.topStories.slice(11, 14)}
                />

              <ArticleIndexGridThree
               stories={this.state.topStories.slice(14, 19)}
               listStories={this.state.topStories.slice(0, 5)}
               headers={["most recent"]}
               links={["#/most-recent"]}
               />

               <ArticleIndexGridFour
               listStories={this.state.topStories.slice(0, 9)}
               headers={["Business", "Culture", "Gear"]}
               />

               <ArticleIndexGridFour
               listStories={this.state.topStories.slice(9, 18)}
               headers={["Ideas", "Science", "Security"]}
               />

              {
                this.props.location.pathname === "/" &&
                <div className="horizontal">
                  <div>
                    <ArticleUnitSubscribe/>
                  </div>
                </div>
              }

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
