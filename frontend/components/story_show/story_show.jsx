import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import NavigationBar from '../navigation_bar/navigation_bar.jsx';
import Footer from '../footer/footer.jsx';
import Loading from '../loading/loading.jsx';
import StoryShowArticle from './story_show_article.jsx';
import StoryShowShare from './story_show_share.jsx';
import ArticleUnitNine from '../article_units/article_unit_nine.jsx';
import ArticleUnitSubscribe from '../article_units/article_unit_subscribe.jsx';
import ArticleIndexGridThree from '../article_index/article_index_grid_three.jsx';

class StoryShow extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        story: this.props.story
      };
      this.convertDateTime = this.convertDateTime.bind(this);
  }

  componentDidMount(){
    debugger
    if (this.props.location.state) {
      localStorage.story = JSON.stringify(this.props.story);
      // this.props.fetchStory(this.props.story);
    }
    this.props.fetchTopStories();
  }

  componentWillReceiveProps(nextProps) {
    debugger
    if (nextProps.story !== this.props.story) {
      localStorage.story = JSON.stringify(nextProps.story);
      this.setState({story: nextProps.story});
    }
  }

  convertDateTime(){
    let date = this.state.story.publishedAt.split(/-|T|Z|:|\./);
    let month = date[1];
    let day = date[2];
    let year = date[0].slice(2);
    let hours = date[3];
    let minutes = date[4];

    let hourConversion = hours%12;
    let time;
    if(hourConversion === 0){
      time = `${12}:${minutes} am`;
    } else if (hourConversion === 12) {
      time = `${12}:${minutes} pm`;
    } else if (hours > 12) {
      if (hourConversion < 10) {
        time = `0${hourConversion}:${minutes} pm`;
      } else {
        time = `${hourConversion}:${minutes} pm`;
      }
    } else {
      time = `${hours}:${minutes} am`;
    }

    return ({date: `${month}.${day}.${year}`, time: time});
  }

  render(){
    debugger
    if (this.props.topStories.length <= 0){
      return (
        <Loading/>
      );
    } else {
      let dateTime = this.convertDateTime();
      return (
        <div>
          <NavigationBar
            header={this.props.location.pathname === "/" ? "" :
                    (this.state.story.title.length < 30 ?
                    this.state.story.title.length :
                    `${this.state.story.title.slice(0, 30)}...`)}
          />
          <div className="story-show-background">
            <div className="story-show">
              <div className="horizontal">
                <StoryShowShare/>
                <StoryShowArticle
                  story={this.state.story}
                  dateTime={dateTime}
                  />
                <div className="story-show-popular">
                  <ArticleUnitNine
                    stories={this.props.topStories.slice(0,3)}
                      header={["most popular"]}
                      link={["#/most-popular"]}
                      />
                </div>
              </div>
            </div>
          </div>
          <div className="story-show-bottom-background">
            <div className="story-show-bottom-index">
              <ArticleIndexGridThree
               stories={this.props.topStories.slice(3, 8)}
               listStories={this.props.topStories.slice(8, 13)}
               headers={["most recent"]}
               links={["#/most-recent"]}
               />
             <div className="horizontal">
               <div>
                 <ArticleUnitSubscribe/>
               </div>
             </div>
            </div>
            <Footer
              pathname={this.props.location.pathname}
              />
          </div>
        </div>
      );
    }
  }
}

export default withRouter(StoryShow);

















// comment
