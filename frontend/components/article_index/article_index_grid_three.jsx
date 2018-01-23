import React from 'react';
import { Link } from 'react-router-dom';

class ArticleIndexGridThree extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="horizontal margin-bottom">
        <div className="margin-right">
          <div>
            {this.props.articles["ten"]}
          </div>
        </div>
        <div className="">
          <div className="horizontal margin-bottom">
            <div className="margin-right">
              {this.props.articles["two"]}
            </div>
            <div>
              {this.props.articles["one"]}
            </div>
          </div>
          <div className="horizontal">
            <div className="">
              <div className="margin-right">
                {this.props.articles["five"]}
              </div>
            </div>
            <div className="">
              <div className="margin-bottom">
                {this.props.articles["three"]}
              </div>
              <div>
                {this.props.articles["four"]}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleIndexGridThree;
