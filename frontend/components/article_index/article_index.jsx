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
      topStories: {},
      topBusiness: {},
      topEntertainment: {},
      topGeneral: {},
      topHealth: {},
      topScience: {},
      topSports: {},
      topTechnology: {}
    };
  }

  componentDidMount(){
    let topStories = {};
    let topBusiness = {};
    let topEntertainment = {};
    let topGeneral = {};
    let topHealth = {};
    let topScience = {};
    let topSports = {};
    let topTechnology = {};

    MainUtil.fetchTopStories().then(resultHash => {
      resultHash.articles.map((el, i) => {
        topStories[i] = el;
        this.setState({topStories: topStories});
      });
    });

    MainUtil.fetchTopBusiness().then(resultHash => {
      resultHash.articles.map((el, i) => {
        topBusiness[i] = el;
        this.setState({topBusiness: topBusiness});
      });
    });

    MainUtil.fetchTopEntertainment().then(resultHash => {
      resultHash.articles.map((el, i) => {
        topEntertainment[i] = el;
        this.setState({topEntertainment: topEntertainment});
      });
    });

    MainUtil.fetchTopGeneral().then(resultHash => {
      resultHash.articles.map((el, i) => {
        topGeneral[i] = el;
        this.setState({topGeneral: topGeneral});
      });
    });

    MainUtil.fetchTopHealth().then(resultHash => {
      resultHash.articles.map((el, i) => {
        topHealth[i] = el;
        this.setState({topHealth: topHealth});
      });
    });

    MainUtil.fetchTopScience().then(resultHash => {
      resultHash.articles.map((el, i) => {
        topScience[i] = el;
        this.setState({topScience: topScience});
      });
    });

    MainUtil.fetchTopSports().then(resultHash => {
      resultHash.articles.map((el, i) => {
        topSports[i] = el;
        this.setState({topSports: topSports});
      });
    });

    MainUtil.fetchTopTechnology().then(resultHash => {
      resultHash.articles.map((el, i) => {
        topTechnology[i] = el;
        this.setState({topTechnology: topTechnology});
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
    let articleTwelve;
    let articleThirteen;
    let articleFourteen;
    let articleFifteen;
    let articleSixteen;
    let articleSeventeen;
    let articleSubscribe;

    if(Object.keys(this.state.topTechnology).length >= 20){
      articleOne = <ArticleUnitOne
        story={Object.values(this.state.topStories)[0]}
        />;
      articleTwo = <ArticleUnitTwo
        story={Object.values(this.state.topStories)[1]}
        />;
      articleThree = <ArticleUnitThree
        story={Object.values(this.state.topStories)[2]}
        />;
      articleFour = <ArticleUnitFour
        story={Object.values(this.state.topStories)[3]}
        />;
      articleFive = <ArticleUnitFive
        story={Object.values(this.state.topStories)[4]}
        />;
      articleSix = <ArticleUnitSix
        story={Object.values(this.state.topStories)[5]}
        />;
      articleSeven = <ArticleUnitSeven
        story={Object.values(this.state.topStories)[6]}
        />;
      articleEight = <ArticleUnitEight
        story={Object.values(this.state.topStories)[7]}
        />;
      articleNine = <ArticleUnitNine
        stories={[Object.values(this.state.topStories)[8],
          Object.values(this.state.topStories)[9],
          Object.values(this.state.topStories)[10]]}
        header="most popular"
        link="#/most-popular"
        />;
      articleTen = <ArticleUnitNine
        stories={[Object.values(this.state.topStories)[11],
          Object.values(this.state.topStories)[12],
          Object.values(this.state.topStories)[13],
          Object.values(this.state.topStories)[14],
          Object.values(this.state.topStories)[15]]}
        header="most recent"
        link="#/most-recent"
        />;
      articleEleven = <ArticleUnitEleven
        stories={[Object.values(this.state.topScience)[0],
          Object.values(this.state.topScience)[1],
          Object.values(this.state.topScience)[2]]}
        header="Business"
        />;
      articleTwelve = <ArticleUnitEleven
        stories={[Object.values(this.state.topBusiness)[0],
          Object.values(this.state.topStories)[1],
          Object.values(this.state.topStories)[2]]}
        header="Culture"
        />;
      articleThirteen = <ArticleUnitEleven
        stories={[Object.values(this.state.topStories)[7],
          Object.values(this.state.topStories)[7],
          Object.values(this.state.topStories)[7]]}
        header="Gear"
        />;
      articleFourteen = <ArticleUnitEleven
        stories={[Object.values(this.state.topStories)[7],
          Object.values(this.state.topStories)[7],
          Object.values(this.state.topStories)[7]]}
        header="Ideas"
        />;
      articleFifteen = <ArticleUnitEleven
        stories={[Object.values(this.state.topStories)[7],
          Object.values(this.state.topStories)[7],
          Object.values(this.state.topStories)[7]]}
        header="Science"
        />;
      articleSixteen = <ArticleUnitEleven
        stories={[Object.values(this.state.topStories)[7],
          Object.values(this.state.topStories)[7],
          Object.values(this.state.topStories)[7]]}
        header="Security"
        />;
      articleSeventeen = <ArticleUnitEleven
        stories={[Object.values(this.state.topStories)[7],
          Object.values(this.state.topStories)[7],
          Object.values(this.state.topStories)[7]]}
        header="Transportation"
        />;
      articleSubscribe = <ArticleUnitSubscribe/>;
    }

    if (articleSubscribe === undefined) {
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
                stories={[Object.values(this.state.topStories)[0],
                    Object.values(this.state.topStories)[1],
                    Object.values(this.state.topStories)[2],
                    Object.values(this.state.topStories)[3],
                    Object.values(this.state.topStories)[4],
                    Object.values(this.state.topStories)[5]]}
                listStories={[Object.values(this.state.topStories)[6],
                    Object.values(this.state.topStories)[7],
                    Object.values(this.state.topStories)[8]]}
                headers={["most popular"]}
                links={["#/most-popular"]}
                />

              <ArticleIndexGridTwo
                articles={[articleSeven,
                          articleFive,
                          articleEight]}
                />

              <ArticleIndexGridThree
                articles={[articleTen,
                          articleTwo,
                          articleOne,
                          articleFive,
                          articleThree,
                          articleFour]}
                />

              <ArticleIndexGridFour
                articles={[articleTwelve,
                          articleThirteen,
                          articleFourteen]}
                />

              <ArticleIndexGridFour
                articles={[articleFifteen,
                          articleSixteen,
                          articleSeventeen]}
                />

              {
                this.props.location.pathname === "/" &&
                <div className="horizontal">
                  <div>
                    {articleSubscribe}
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
