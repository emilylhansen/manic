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
            {this.props.articles[0]}
          </div>
        </div>
        <div className="">
          <div className="horizontal margin-bottom">
            <div className="margin-right">
              {this.props.articles[1]}
            </div>
            <div>
              {this.props.articles[2]}
            </div>
          </div>
          <div className="horizontal">
            <div className="">
              <div className="margin-right">
                {this.props.articles[3]}
              </div>
            </div>
            <div className="">
              <div className="margin-bottom">
                {this.props.articles[4]}
              </div>
              <div>
                {this.props.articles[5]}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleIndexGridThree;
