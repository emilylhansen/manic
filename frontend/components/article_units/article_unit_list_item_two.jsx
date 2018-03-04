import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ArticleUnitListItemTwo extends React.Component {
  constructor(props){
      super(props);
  }

  render(){
    return (
      <li className="article-unit-list-item-two">
        <div className="article-unit-list-item-two-bottom">
          <div>
            <div className="article-unit-image article-unit-list-item-image">
              <img src={this.props.story.urlToImage ?
                        this.props.story.urlToImage :
                        "frontend/images/Image-not-available.jpg"}></img>
            </div>
            <div className="article-unit-list-item-text">
              <div className="article-unit-title">
                <h6>
                  <Link to={{
                      pathname: `/story/${this.props.story.title.toLowerCase().split(/[^A-Za-z]/).join("")}`,
                      state: { story: this.props.story }}}
                      >
                    {this.props.story.title.length > 30 ?
                    `${this.props.story.title.split("").slice(0, 30).join("")}...` :
                    this.props.story.title}
                  </Link>
                </h6>
              </div>
              <div className="article-unit-author">
                <h2>
                  {this.props.story.author ?
                  (this.props.story.author.length > 20 ?
                  `${this.props.story.author.split("").slice(0, 20).join("")}...` :
                  this.props.story.author) :
                  ""}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default withRouter(ArticleUnitListItemTwo);

















// comment
