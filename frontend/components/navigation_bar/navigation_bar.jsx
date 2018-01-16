import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import StoryIndex from '../story_index/story_index.jsx';

class NavigationBar extends React.Component {
  constructor(props){
      super(props);
      this.toggleNav = this.toggleNav.bind(this);
      this.convertTitle = this.convertTitle.bind(this);
      this.green = "#00A85F";
      this.purple ="#461F4B";
      this.teal = "#96CCCE";
      this.blue = "#0086A1";
      this.orange = "#FFC00A";
      this.red = "#F52143";
  }

  componentDidMount(){
    this.toggleNav();
  }

  toggleNav(){
    let nav = document.getElementById("navigation-bar-top");
    let section;
    switch (this.props.location.pathname) {
      case "/top-stories":
        section = document.getElementById("navigation-bar-bottom-section-one");
        section.style.backgroundColor = `${this.green}`;
        section.getElementsByTagName('a')[0].style.color = "white";
        section.style.borderTop = "none";
        nav.style.backgroundColor = `${this.green}`;
        nav.getElementsByTagName('a')[0].style.color = "white";
        nav.getElementsByTagName('h3')[1].style.color = "white";
        break;
      case "/two":
        section = document.getElementById("navigation-bar-bottom-section-two");
        section.style.backgroundColor = `${this.purple}`;
        section.getElementsByTagName('a')[0].style.color = "white";
        section.style.borderTop = "none";
        nav.style.backgroundColor = `${this.purple}`;
        nav.getElementsByTagName('a')[0].style.color = "white";
        nav.getElementsByTagName('h3')[1].style.color = "white";
        break;
      case "/three":
        section = document.getElementById("navigation-bar-bottom-section-three");
        section.style.backgroundColor = `${this.teal}`;
        section.getElementsByTagName('a')[0].style.color = "white";
        section.style.borderTop = "none";
        nav.style.backgroundColor = `${this.teal}`;
        nav.getElementsByTagName('a')[0].style.color = "white";
        nav.getElementsByTagName('h3')[1].style.color = "white";
        break;
      case "/four":
        section = document.getElementById("navigation-bar-bottom-section-four");
        section.style.backgroundColor = `${this.blue}`;
        section.getElementsByTagName('a')[0].style.color = "white";
        section.style.borderTop = "none";
        nav.style.backgroundColor = `${this.blue}`;
        nav.getElementsByTagName('a')[0].style.color = "white";
        nav.getElementsByTagName('h3')[1].style.color = "white";
        break;
      case "/five":
        section = document.getElementById("navigation-bar-bottom-section-five");
        section.style.backgroundColor = `${this.orange}`;
        section.getElementsByTagName('a')[0].style.color = "white";
        section.style.borderTop = "none";
        nav.style.backgroundColor = `${this.orange}`;
        nav.getElementsByTagName('a')[0].style.color = "white";
        nav.getElementsByTagName('h3')[1].style.color = "white";
        break;
      case "/six":
        section = document.getElementById("navigation-bar-bottom-section-six");
        section.style.backgroundColor = `${this.red}`;
        section.getElementsByTagName('a')[0].style.color = "white";
        section.style.borderTop = "none";
        nav.style.backgroundColor = `${this.red}`;
        nav.getElementsByTagName('a')[0].style.color = "white";
        nav.getElementsByTagName('h3')[1].style.color = "white";
        break;
      default:
        section = document.getElementById("navigation-bar-bottom-section-six");
        section.style.backgroundColor = "white";
        section.getElementsByTagName('a')[0].style.color = "#6C6C6C";
        section.style.borderTop = "1px solid #CCCCCC";
        nav.style.backgroundColor = "white";
        break;
    }
  }

  convertTitle(title){
    return title.split(/\/|-/).join(" ").toUpperCase();
  }

  render(){
    return (
        <div className="navigation-bar">

          <div id="navigation-bar-top">
            <div className="navigation-bar-top-section">
              <h3>
                {
                  this.props.location.pathname !== "/" ?
                  <a href={`index.html#`} onClick={() => window.location.reload()}>
                    HACKER NEWS
                  </a>
                  :
                  ""
                }
              </h3>
            </div>
            <div className="navigation-bar-top-section">
              <h3>
                {this.props.location.pathname !== "/" ? this.convertTitle(this.props.location.pathname) : "HACKER NEWS"}
              </h3>
            </div>
            <div className="navigation-bar-top-section">
              <h3>
              </h3>
            </div>
          </div>

          <div className="navigation-bar-bottom">
            <div className="navigation-bar-bottom-section" id="navigation-bar-bottom-section-one">
              <h2><a href={`index.html#/top-stories`} onClick={() => window.location.reload()}>TOP STORIES</a></h2>
            </div>
            <div className="navigation-bar-bottom-section" id="navigation-bar-bottom-section-two">
              <h2><a href={`index.html#/two`} onClick={() => window.location.reload()}>TWO</a></h2>
            </div>
            <div className="navigation-bar-bottom-section" id="navigation-bar-bottom-section-three">
              <h2><a href={`index.html#/three`} onClick={() => window.location.reload()}>THREE</a></h2>
            </div>
            <div className="navigation-bar-bottom-section" id="navigation-bar-bottom-section-four">
              <h2><a href={`index.html#/four`} onClick={() => window.location.reload()}>FOUR</a></h2>
            </div>
            <div className="navigation-bar-bottom-section" id="navigation-bar-bottom-section-five">
              <h2><a href={`index.html#/five`} onClick={() => window.location.reload()}>FIVE</a></h2>
            </div>
            <div className="navigation-bar-bottom-section" id="navigation-bar-bottom-section-six">
              <h2><a href={`index.html#/six`} onClick={() => window.location.reload()}>SIX</a></h2>
            </div>
          </div>

        </div>
    );
  }
}

export default withRouter(NavigationBar);

















// comment
