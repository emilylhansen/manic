import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ArticleUnitSubscribeItem extends React.Component {
  constructor(props){
      super(props);
  }

  render(){
    return (
      <li className="article-unit-subscribe-item">
        <div className="article-unit-subscribe-item-content article-unit-bottom">
          <div className="article-unit-subscribe-item-top">
            <h3>{this.props.header}</h3>
          </div>
          <div className="article-unit-subscribe-item-bottom horizontal">
            <div className="article-unit-subscribe-item-bottom-text">
              <h1>{this.props.text}</h1>
            </div>
            <div className="article-unit-subscribe-item-bottom-image article-unit-image">
              <img src="frontend/images/world.jpg"></img>
            </div>
          </div>
          <div className="article-unit-subscribe-item-more article-unit-more">
            <div className="article-unit-subscribe-item-more-context article-unit-more-context horizontal">
              <div className="article-unit-subscribe-item-more-button article-unit-more-button">
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i></div>
              <h2>{this.props.action}</h2>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default withRouter(ArticleUnitSubscribeItem);

















// comment
