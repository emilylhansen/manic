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
              {this.props.articles["one"]}
            </div>
            <div>
              {this.props.articles["two"]}
            </div>
          </div>
          <div className="horizontal margin-bottom">
            <div className="margin-right">
              <div className="margin-bottom">
                {this.props.articles["three"]}
              </div>
              <div>
                {this.props.articles["four"]}
              </div>
            </div>
            <div className="">
              <div>
                {this.props.articles["five"]}
              </div>
            </div>
          </div>
          <div className="">
            <div>
              {this.props.articles["six"]}
            </div>
          </div>
        </div>
        <div className="">
          <div className="margin-bottom">
            {this.props.articles["nine"]}
          </div>
          <div>
            {this.props.articles["eleven"]}
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleIndexGridOne;
