import React from 'react';
import { Link } from 'react-router-dom';

class ArticleUnitMore extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    return (
      <div className="article-unit-more">
        <a href={this.props.link}
          onClick={()=> window.location.reload()}>
          <div className="article-unit-more-context horizontal">
            <div className="article-unit-more-button">
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i></div>
              <h2>{`more ${this.props.header}`}</h2>
          </div>
        </a>
      </div>
    );
  }
}

export default ArticleUnitMore;
