import React from 'react';
import { Link } from 'react-router-dom';

class ArticleIndexGridFour extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="margin-bottom inline-block">
        <div className="horizontal">
          <div className="margin-right">
            {this.props.articles[0]}
          </div>
          <div className="margin-right">
            {this.props.articles[1]}
          </div>
          <div>
            {this.props.articles[2]}
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleIndexGridFour;
