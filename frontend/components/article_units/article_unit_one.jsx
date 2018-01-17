import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ArticleUnitOne extends React.Component {
  constructor(props){
      super(props);
  }

  render(){
    return (
      <div className="article-unit-one">
        <div className="article-unit-one-top"></div>
        <div className="article-unit-one-bottom">
          <div className="article-unit-one-bottom-context">
            <div className="article-unit-one-bottom-context-image">
              <img src=""></img>
            </div>
            <div className="article-unit-one-bottom-context-text">
              <h2>{this.props.category}</h2>
              <h1>{this.props.title}</h1>
              <h2>{this.props.author}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ArticleUnitOne);

















// comment
