import React from 'react';
import { Link } from 'react-router-dom';

class ArticleIndexGridTwo extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="margin-bottom">
        <div className="horizontal margin-bottom">
          <div className="margin-right">
            {this.props.articles[0]}
          </div>
          <div>
            {this.props.articles[1]}
          </div>
        </div>
        <div>
          {this.props.articles[2]}
        </div>
      </div>
    );
  }
}

export default ArticleIndexGridTwo;
