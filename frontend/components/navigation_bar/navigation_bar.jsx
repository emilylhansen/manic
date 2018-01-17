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
      this.brown = "#6A0000";
      this.red = "#F52143";
  }

  componentDidMount(){
    this.toggleNav();
  }

  toggleNav(){
    let nav = document.getElementById("navigation-bar-top");
    let section;
    switch (this.props.location.pathname) {
      case "/business":
        section = document.getElementById("navigation-bar-bottom-section-one");
        section.style.backgroundColor = `${this.green}`;
        section.getElementsByTagName('a')[0].style.color = "white";
        section.style.borderTop = "none";
        nav.style.backgroundColor = `${this.green}`;
        nav.getElementsByTagName('a')[0].style.color = "white";
        nav.getElementsByTagName('h3')[1].style.color = "white";
        break;
      case "/culture":
        section = document.getElementById("navigation-bar-bottom-section-two");
        section.style.backgroundColor = `${this.purple}`;
        section.getElementsByTagName('a')[0].style.color = "white";
        section.style.borderTop = "none";
        nav.style.backgroundColor = `${this.purple}`;
        nav.getElementsByTagName('a')[0].style.color = "white";
        nav.getElementsByTagName('h3')[1].style.color = "white";
        break;
      case "/design":
        section = document.getElementById("navigation-bar-bottom-section-three");
        section.style.backgroundColor = `${this.teal}`;
        section.getElementsByTagName('a')[0].style.color = "white";
        section.style.borderTop = "none";
        nav.style.backgroundColor = `${this.teal}`;
        nav.getElementsByTagName('a')[0].style.color = "white";
        nav.getElementsByTagName('h3')[1].style.color = "white";
        break;
      case "/gear":
        section = document.getElementById("navigation-bar-bottom-section-four");
        section.style.backgroundColor = `${this.blue}`;
        section.getElementsByTagName('a')[0].style.color = "white";
        section.style.borderTop = "none";
        nav.style.backgroundColor = `${this.blue}`;
        nav.getElementsByTagName('a')[0].style.color = "white";
        nav.getElementsByTagName('h3')[1].style.color = "white";
        break;
      case "/science":
        section = document.getElementById("navigation-bar-bottom-section-five");
        section.style.backgroundColor = `${this.orange}`;
        section.getElementsByTagName('a')[0].style.color = "white";
        section.style.borderTop = "none";
        nav.style.backgroundColor = `${this.orange}`;
        nav.getElementsByTagName('a')[0].style.color = "white";
        nav.getElementsByTagName('h3')[1].style.color = "white";
        break;
      case "/security":
        section = document.getElementById("navigation-bar-bottom-section-six");
        section.style.backgroundColor = `${this.brown}`;
        section.getElementsByTagName('a')[0].style.color = "white";
        section.style.borderTop = "none";
        nav.style.backgroundColor = `${this.brown}`;
        nav.getElementsByTagName('a')[0].style.color = "white";
        nav.getElementsByTagName('h3')[1].style.color = "white";
        break;
      case "/transportation":
        section = document.getElementById("navigation-bar-bottom-section-seven");
        section.style.backgroundColor = `${this.red}`;
        section.getElementsByTagName('a')[0].style.color = "white";
        section.style.borderTop = "none";
        nav.style.backgroundColor = `${this.red}`;
        nav.getElementsByTagName('a')[0].style.color = "white";
        nav.getElementsByTagName('h3')[1].style.color = "white";
        break;
      default:
        // section = document.getElementById("navigation-bar-bottom-section-seven");
        // section.style.backgroundColor = "white";
        // section.getElementsByTagName('a')[0].style.color = "#6C6C6C";
        // section.style.borderTop = "1px solid #CCCCCC";
        // nav.style.backgroundColor = "white";
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
                    MANIC
                  </a>
                  :
                  ""
                }
              </h3>
            </div>
            <div className="navigation-bar-top-section">
              <h3>
                {this.props.location.pathname !== "/" ? this.convertTitle(this.props.location.pathname) : "MANIC"}
              </h3>
            </div>
            <div className="navigation-bar-top-section">
              <h3>
              </h3>
            </div>
          </div>

          <div className="navigation-bar-bottom">
            <div className="navigation-bar-bottom-section" id="navigation-bar-bottom-section-one">
              <h2><a href={`index.html#/business`} onClick={() => window.location.reload()}>BUSINESS</a></h2>
            </div>
            <div className="navigation-bar-bottom-section" id="navigation-bar-bottom-section-two">
              <h2><a href={`index.html#/culture`} onClick={() => window.location.reload()}>CULTURE</a></h2>
            </div>
            <div className="navigation-bar-bottom-section" id="navigation-bar-bottom-section-three">
              <h2><a href={`index.html#/design`} onClick={() => window.location.reload()}>DESIGN</a></h2>
            </div>
            <div className="navigation-bar-bottom-section" id="navigation-bar-bottom-section-four">
              <h2><a href={`index.html#/gear`} onClick={() => window.location.reload()}>GEAR</a></h2>
            </div>
            <div className="navigation-bar-bottom-section" id="navigation-bar-bottom-section-five">
              <h2><a href={`index.html#/science`} onClick={() => window.location.reload()}>SCIENCE</a></h2>
            </div>
            <div className="navigation-bar-bottom-section" id="navigation-bar-bottom-section-six">
              <h2><a href={`index.html#/security`} onClick={() => window.location.reload()}>SECURITY</a></h2>
            </div>
            <div className="navigation-bar-bottom-section" id="navigation-bar-bottom-section-seven">
              <h2><a href={`index.html#/transportation`} onClick={() => window.location.reload()}>TRANSPORTATION</a></h2>
            </div>
          </div>

        </div>
    );
  }
}

export default withRouter(NavigationBar);

















// comment
