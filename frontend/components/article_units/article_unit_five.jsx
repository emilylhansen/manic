import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ArticleUnitFive extends React.Component {
  constructor(props){
      super(props);
  }

  render(){
    return (
      <div className="article-unit-five article-unit jump">
        <div className="article-unit-top"></div>
        <div className="article-unit-bottom">
          <div className="article-unit-five-bottom-context">
            <div className="article-unit-image">
              <img src={this.props.story.urlToImage ?
                        this.props.story.urlToImage :
                        "frontend/images/Image-not-available.jpg"}></img>
            </div>
            <div>
              <div className="article-unit-type">
                <h2>{this.props.story.source.name}</h2>
              </div>
              <div className="article-unit-title">
                <h1>
                  <Link to={{
                      pathname: `/story/${this.props.story.title.toLowerCase().split(/[^A-Za-z]/).join("")}`,
                      state: { story: this.props.story }}}
                      >
                    {this.props.story.title.length > 70 ?
                    `${this.props.story.title.split("").slice(0, 70).join("")}...` :
                    this.props.story.title}
                  </Link>
                </h1>
              </div>
              <div className="article-unit-author">
                <h2>
                  {this.props.story.author ?
                  (this.props.story.author.length > 30 ?
                  `${this.props.story.author.split("").slice(0, 30).join("")}...` :
                  this.props.story.author) :
                  ""}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ArticleUnitFive);

















// comment
