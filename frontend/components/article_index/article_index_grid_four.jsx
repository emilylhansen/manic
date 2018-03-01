import React from 'react';
import { Link } from 'react-router-dom';

import ArticleUnitEleven from '../article_units/article_unit_eleven.jsx';

class ArticleIndexGridFour extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="margin-bottom inline-block">
        <div className="horizontal">
          <div className="margin-right">
            <ArticleUnitEleven
              stories={[this.props.listStories[0],
                      this.props.listStories[1],
                      this.props.listStories[2]]}
              header={this.props.headers[0]}
              />
          </div>
          <div className="margin-right">
            <ArticleUnitEleven
              stories={[this.props.listStories[3],
                      this.props.listStories[4],
                      this.props.listStories[5]]}
              header={this.props.headers[1]}
              />
          </div>
          <div>
            <ArticleUnitEleven
              stories={[this.props.listStories[6],
                      this.props.listStories[7],
                      this.props.listStories[8]]}
              header={this.props.headers[2]}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleIndexGridFour;
