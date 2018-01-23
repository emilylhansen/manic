import React from 'react';
import { Link } from 'react-router-dom';

class ArticleIndexGridOne extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="horizontal margin-bottom">
        <div className="margin-right">
          <div className="horizontal margin-bottom">
            <div className="margin-right">
              {this.props.articles[0]}
            </div>
            <div>
              {this.props.articles[1]}
            </div>
          </div>
          <div className="horizontal margin-bottom">
            <div className="margin-right">
              <div className="margin-bottom">
                {this.props.articles[2]}
              </div>
              <div>
                {this.props.articles[3]}
              </div>
            </div>
            <div className="">
              <div>
                {this.props.articles[4]}
              </div>
            </div>
          </div>
          <div className="">
            <div>
              {this.props.articles[5]}
            </div>
          </div>
        </div>
        <div className="">
          <div className="margin-bottom">
            {this.props.articles[6]}
          </div>
          <div className="margin-bottom">
            {this.props.articles[4]}
          </div>
          <div>
            {this.props.articles[3]}
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleIndexGridOne;
