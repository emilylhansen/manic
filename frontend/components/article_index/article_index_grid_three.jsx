import React from 'react';
import { Link } from 'react-router-dom';

import ArticleUnitOne from '../article_units/article_unit_one.jsx';
import ArticleUnitTwo from '../article_units/article_unit_two.jsx';
import ArticleUnitThree from '../article_units/article_unit_three.jsx';
import ArticleUnitFour from '../article_units/article_unit_four.jsx';
import ArticleUnitFive from '../article_units/article_unit_five.jsx';
import ArticleUnitTen from '../article_units/article_unit_ten.jsx';

class ArticleIndexGridThree extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="horizontal margin-bottom">
        <div className="margin-right">
          <div>
            <ArticleUnitTen
              stories={[this.props.listStories[0],
                      this.props.listStories[1],
                      this.props.listStories[2],
                      this.props.listStories[3],
                      this.props.listStories[4]]}
              header={this.props.headers[0]}
              link={this.props.links[0]}
              />
          </div>
        </div>
        <div className="">
          <div className="horizontal margin-bottom">
            <div className="margin-right">
              <ArticleUnitTwo
                story={this.props.stories[0]}
                />
            </div>
            <div>
              <ArticleUnitOne
                story={this.props.stories[1]}
                />
            </div>
          </div>
          <div className="horizontal">
            <div className="">
              <div className="margin-right">
                <ArticleUnitFive
                  story={this.props.stories[2]}
                  />
              </div>
            </div>
            <div className="">
              <div className="margin-bottom">
                <ArticleUnitThree
                  story={this.props.stories[3]}
                  />
              </div>
              <div>
                <ArticleUnitFour
                  story={this.props.stories[4]}
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleIndexGridThree;
