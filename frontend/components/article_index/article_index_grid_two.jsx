import React from 'react';
import { Link } from 'react-router-dom';

class ArticleIndexGridTwo extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="margin-bottom">
        <div>
          {this.props.articles["eight"]}
        </div>
      </div>
    );
  }
}

export default ArticleIndexGridTwo;
