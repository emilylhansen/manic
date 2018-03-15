import React from 'react';
import { Link } from 'react-router-dom';

import ArticleUnitOne from '../article_units/article_unit_one.jsx';
import ArticleUnitTwo from '../article_units/article_unit_two.jsx';
import ArticleUnitThree from '../article_units/article_unit_three.jsx';
import ArticleUnitFour from '../article_units/article_unit_four.jsx';
import ArticleUnitFive from '../article_units/article_unit_five.jsx';
import ArticleUnitSix from '../article_units/article_unit_six.jsx';
import ArticleUnitNine from '../article_units/article_unit_nine.jsx';

const ArticleIndexGridOne = props => {
  return (
    <div className="horizontal margin-bottom">
      <div className="margin-right">
        <div className="horizontal margin-bottom">
          <div className="margin-right">
            <ArticleUnitOne
              story={props.stories[0]}
              />
          </div>
          <div>
            <ArticleUnitTwo
              story={props.stories[1]}
              />
          </div>
        </div>
        <div className="horizontal margin-bottom">
          <div className="margin-right">
            <div className="margin-bottom">
              <ArticleUnitThree
                story={props.stories[2]}
                />
            </div>
            <div>
              <ArticleUnitFour
                story={props.stories[3]}
                />
            </div>
          </div>
          <div className="">
            <div>
              <ArticleUnitFive
                story={props.stories[4]}
                />
            </div>
          </div>
        </div>
        <div className="">
          <div>
            <ArticleUnitSix
              story={props.stories[5]}
              />
          </div>
        </div>
      </div>
      <div className="">
        <div className="margin-bottom">
          <ArticleUnitNine
            stories={[props.listStories[0],
                    props.listStories[1],
                    props.listStories[2]]}
            header={props.headers[0]}
            link={props.links[0]}
            />
        </div>
        <div className="margin-bottom">
          <ArticleUnitFive
            story={props.stories[6]}
            />
        </div>
        <div>
          <ArticleUnitFour
            story={props.stories[7]}
            />
        </div>
      </div>
    </div>
  );
};

export default ArticleIndexGridOne;
