import React from 'react';
import { Link } from 'react-router-dom';

import ArticleUnitEleven from '../article_units/article_unit_eleven.jsx';

const ArticleIndexGridFour = props => {
  return (
    <div className="margin-bottom inline-block">
      <div className="horizontal">
        <div className="margin-right">
          <ArticleUnitEleven
            stories={[props.listStories[0],
                    props.listStories[1],
                    props.listStories[2]]}
            header={props.headers[0]}
            icon={props.icons[0]}
            />
        </div>
        <div className="margin-right">
          <ArticleUnitEleven
            stories={[props.listStories[3],
                    props.listStories[4],
                    props.listStories[5]]}
            header={props.headers[1]}
            icon={props.icons[1]}
            />
        </div>
        <div>
          <ArticleUnitEleven
            stories={[props.listStories[6],
                    props.listStories[7],
                    props.listStories[8]]}
            header={props.headers[2]}
            icon={props.icons[2]}
            />
        </div>
      </div>
    </div>
  );
};

export default ArticleIndexGridFour;
