import React from 'react';
import { Link } from 'react-router-dom';

import * as MainUtil from '../../util/main_util';
import ArticleUnitNine from '../article_units/article_unit_nine.jsx';
import ArticleUnitTwelve from '../article_units/article_unit_twelve.jsx';
import Footer from '../footer/footer.jsx';

class ArticleIndex extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let articleOne;
    let articleTwo;

    if(Object.keys(this.state.bestStories).length > 9){
      articleOne = <ArticleUnitTwelve
        story={Object.values(this.state.bestStories)[0]}
        />;
      articleTwo = <ArticleUnitNine
        story={Object.values(this.state.bestStories)[1],
              Object.values(this.state.bestStories)[1],
              Object.values(this.state.bestStories)[1],
              Object.values(this.state.bestStories)[1],
              Object.values(this.state.bestStories)[1]}
        />;
    }

    if (articleTwo === undefined) {
      return (
        <div className="loading">
          <div className="loading-logo">
            <h3>M</h3>
          </div>
        </div>
      );
    } else {
      return (
        <div className="category-background">
          <div className="category-index">

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
