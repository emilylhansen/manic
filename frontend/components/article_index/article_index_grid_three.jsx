import React from 'react';
import { Link } from 'react-router-dom';

import ArticleUnitOne from '../article_units/article_unit_one.jsx';
import ArticleUnitTwo from '../article_units/article_unit_two.jsx';
import ArticleUnitThree from '../article_units/article_unit_three.jsx';
import ArticleUnitFour from '../article_units/article_unit_four.jsx';
import ArticleUnitFive from '../article_units/article_unit_five.jsx';
import ArticleUnitTen from '../article_units/article_unit_ten.jsx';

const ArticleIndexGridThree = props => {
  return (
    <div className="horizontal margin-bottom">
      <div className="margin-right">
        <div>
          <ArticleUnitTen
            stories={[props.listStories[0],
                    props.listStories[1],
                    props.listStories[2],
                    props.listStories[3],
                    props.listStories[4]]}
            header={props.headers[0]}
            link={props.links[0]}
            />
        </div>
      </div>
      <div className="">
        <div className="horizontal margin-bottom">
          <div className="margin-right">
            <ArticleUnitTwo
              story={props.stories[0]}
              />
          </div>
          <div>
            <ArticleUnitOne
              story={props.stories[1]}
              />
          </div>
        </div>
        <div className="horizontal">
          <div className="">
            <div className="margin-right">
              <ArticleUnitFive
                story={props.stories[2]}
                />
            </div>
          </div>
          <div className="">
            <div className="margin-bottom">
              <ArticleUnitThree
                story={props.stories[3]}
                />
            </div>
            <div>
              <ArticleUnitFour
                story={props.stories[4]}
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleIndexGridThree;
