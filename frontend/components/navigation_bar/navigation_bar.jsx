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
      this.changeNav = this.changeNav.bind(this);
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

  changeNav(section, color){
    let nav = document.getElementById("navigation-bar-top");
    section.style.backgroundColor = color;
    section.getElementsByTagName('a')[0].style.color = "white";
    section.style.borderTop = "none";
    nav.style.backgroundColor = color;
    nav.getElementsByTagName('a')[0].style.color = "white";
    nav.getElementsByTagName('h3')[1].style.color = "white";
    nav.getElementsByTagName('h2')[1].style.color = "white";
    nav.getElementsByTagName('i')[0].style.color = "white";
    nav.getElementsByTagName('i')[1].style.color = "white";
  }

  toggleNav(){
    switch (this.props.location.pathname) {
      case "/business":
        this.changeNav(document.getElementById("navigation-bar-bottom-section-one"), this.green);
        break;
      case "/culture":
        this.changeNav(document.getElementById("navigation-bar-bottom-section-one"), this.purple);
        break;
      case "/design":
        this.changeNav(document.getElementById("navigation-bar-bottom-section-one"), this.teal);
        break;
      case "/gear":
        this.changeNav(document.getElementById("navigation-bar-bottom-section-one"), this.blue);
        break;
      case "/science":
        this.changeNav(document.getElementById("navigation-bar-bottom-section-one"), this.orange);
        break;
      case "/security":
        this.changeNav(document.getElementById("navigation-bar-bottom-section-one"), this.brown);
        break;
      case "/transportation":
        this.changeNav(document.getElementById("navigation-bar-bottom-section-one"), this.red);
        break;
      default:
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
