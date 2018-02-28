import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavigationBarMenu extends React.Component {
  constructor(props){
      super(props);
      this.changeNav = this.changeNav.bind(this);
      this.toggleNav = this.toggleNav.bind(this);
  }

  componentDidMount() {
    this.toggleNav();
  }

  changeNav(section, color){
    section.style.backgroundColor = color;
    section.getElementsByTagName('a')[0].style.color = "white";
    section.style.borderTop = "none";
  }

  toggleNav(){
    let category = this.props.location.pathname;

    if (category.includes("business")){
      this.changeNav(document.getElementById("navigation-bar-menu-section-one"),
      this.props.colors.green);
    } else if (category.includes("culture")) {
      this.changeNav(document.getElementById("navigation-bar-menu-section-two"),
      this.props.colors.purple);
    } else if (category.includes("design")) {
      this.changeNav(document.getElementById("navigation-bar-menu-section-three"),
      this.props.colors.teal);
    } else if (category.includes("gear")) {
      this.changeNav(document.getElementById("navigation-bar-menu-section-four"),
      this.props.colors.blue);
    } else if (category.includes("science")) {
      this.changeNav(document.getElementById("navigation-bar-menu-section-five"),
      this.props.colors.orange);
    } else if (category.includes("security")) {
      this.changeNav(document.getElementById("navigation-bar-menu-section-six"),
      this.props.colors.brown);
    } else if (category.includes("transportation")) {
      this.changeNav(document.getElementById("navigation-bar-menu-section-seven"),
      this.props.colors.red);
    }
  }

  render(){
    return (
      <div className="navigation-bar-menu">
        <div className="navigation-bar-menu-top horizontal">
          <div className="navigation-bar-menu-section" id="navigation-bar-menu-section-one">
            <div className="navigation-bar-menu-section-content">
              <div className="navigation-bar-menu-section-image">
                <img src="frontend/images/eight.png"></img>
              </div>
              <h2><a href={`index.html#/category/business`}
                onClick={() => window.location.reload()}>BUSINESS</a></h2>
            </div>
          </div>
          <div className="navigation-bar-menu-section" id="navigation-bar-menu-section-two">
            <div className="navigation-bar-menu-section-content">
              <div className="navigation-bar-menu-section-image">
                <img src="frontend/images/eighteen.png"></img>
              </div>
              <h2><a href={`index.html#/category/culture`}
                onClick={() => window.location.reload()}>CULTURE</a></h2>
            </div>
          </div>
          <div className="navigation-bar-menu-section" id="navigation-bar-menu-section-three">
            <div className="navigation-bar-menu-section-content">
              <div className="navigation-bar-menu-section-image">
                <img src="frontend/images/eleven.png"></img>
              </div>
              <h2><a href={`index.html#/category/design`}
                onClick={() => window.location.reload()}>DESIGN</a></h2>
            </div>
          </div>
          <div className="navigation-bar-menu-section" id="navigation-bar-menu-section-four">
            <div className="navigation-bar-menu-section-content">
              <div className="navigation-bar-menu-section-image">
                <img src="frontend/images/fifteen.png"></img>
              </div>
              <h2><a href={`index.html#/category/gear`}
                onClick={() => window.location.reload()}>GEAR</a></h2>
            </div>
          </div>
          <div className="navigation-bar-menu-section" id="navigation-bar-menu-section-five">
            <div className="navigation-bar-menu-section-content">
              <div className="navigation-bar-menu-section-image">
                <img src="frontend/images/nineteen.png"></img>
              </div>
              <h2><a href={`index.html#/category/science`}
                onClick={() => window.location.reload()}>SCIENCE</a></h2>
            </div>
          </div>
          <div className="navigation-bar-menu-section" id="navigation-bar-menu-section-six">
            <div className="navigation-bar-menu-section-content">
              <div className="navigation-bar-menu-section-image">
                <img src="frontend/images/sixteen.png"></img>
              </div>
              <h2><a href={`index.html#/category/security`}
                onClick={() => window.location.reload()}>SECURITY</a></h2>
            </div>
          </div>
          <div className="navigation-bar-menu-section" id="navigation-bar-menu-section-seven">
            <div className="navigation-bar-menu-section-content">
              <div className="navigation-bar-menu-section-image">
                <img src="frontend/images/twentytwo.png"></img>
              </div>
              <h2><a href={`index.html#/category/transportation`}
                onClick={() => window.location.reload()}>TRANSPORTATION</a></h2>
            </div>
          </div>
        </div>
        <div className="navigation-bar-menu-bottom">
          <div className="navigation-bar-menu-bottom-list">
            <ul className="horizontal">
              <li><h2><a>photo</a></h2></li>
              <li><h2><a>video</a></h2></li>
              <li><h2><a>backchannel</a></h2></li>
              <li><h2><a>magazine</a></h2></li>
              <li><h2><a>manic insider</a></h2></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(NavigationBarMenu);

















// comment
