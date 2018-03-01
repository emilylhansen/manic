import React from 'react';
import { Link } from 'react-router-dom';

import ArticleUnitSeven from '../article_units/article_unit_seven.jsx';
import ArticleUnitFive from '../article_units/article_unit_five.jsx';
import ArticleUnitEight from '../article_units/article_unit_eight.jsx';

class ArticleIndexGridTwo extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="margin-bottom">
        <div className="horizontal margin-bottom">
          <div className="margin-right">
            <ArticleUnitSeven
              story={this.props.stories[0]}
              />
          </div>
          <div>
            <ArticleUnitFive
              story={this.props.stories[1]}
              />
          </div>
        </div>
        <div>
          <ArticleUnitEight
            story={this.props.stories[2]}
            />
        </div>
      </div>
    );
  }
}

export default ArticleIndexGridTwo;
