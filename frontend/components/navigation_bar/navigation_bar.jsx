import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import NavigationBarMenu from './navigation_bar_menu.jsx';
import NavigationBarTop from './navigation_bar_top.jsx';
import NavigationBarBottom from './navigation_bar_bottom.jsx';
import NavigationBarSearch from './navigation_bar_search.jsx';
import NavigationBarSubscribe from './navigation_bar_subscribe.jsx';

class NavigationBar extends React.Component {
  constructor(props){
      super(props);
      this.toggleNav = this.toggleNav.bind(this);
      this.convertTitle = this.convertTitle.bind(this);
      this.handleMouseHover = this.handleMouseHover.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.handleInput = this.handleInput.bind(this);
      this.state = {
        isHovering: false,
        searchIsClicked: false,
        search: "",
        menuIsClicked: false
      };
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

  handleMouseHover() {
    this.setState({isHovering: !this.state.isHovering});
  }

  handleClick(field) {
    if (field === "searchIsClicked") {
      this.setState({[field]: !this.state.searchIsClicked});
    } else if (field === "menuIsClicked") {
      this.setState({[field]: !this.state.menuIsClicked});
    }
  }

  handleInput(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render(){
    return (
        <div className="navigation-bar">

          <NavigationBarTop
            handleClick={this.handleClick}
            menuIsClicked={this.state.menuIsClicked}
            pathname={this.props.location.pathname}
            convertTitle={this.convertTitle}
            handleMouseHover={this.handleMouseHover}
            searchIsClicked={this.state.searchIsClicked}
            />

          { (!this.state.isHovering &&
            !this.state.searchIsClicked &&
            !this.state.menuIsClicked) &&
            <NavigationBarBottom/>
          }
          {
            this.state.isHovering &&
            <NavigationBarSubscribe
              handleMouseHover={this.handleMouseHover}
              />
          }
          {
            this.state.searchIsClicked &&
            <NavigationBarSearch
              search={this.state.search}
              handleInput={this.handleInput}
              />
          }
          {
            this.state.menuIsClicked &&
            <NavigationBarMenu/>
          }
        </div>
    );
  }
}

export default withRouter(NavigationBar);

















// comment
