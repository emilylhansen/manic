import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import NavigationBarMenu from './navigation_bar_menu.jsx';
import NavigationBarTop from './navigation_bar_top.jsx';
import NavigationBarBottom from './navigation_bar_bottom.jsx';
import NavigationBarSearchContainer from './navigation_bar_search_container.jsx';
import NavigationBarSubscribe from './navigation_bar_subscribe.jsx';

class NavigationBar extends React.Component {
  constructor(props){
      super(props);
      this.handleMouseHover = this.handleMouseHover.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.handleInput = this.handleInput.bind(this);
      this.handleScroll = this.handleScroll.bind(this);
      this.state = {
        isHovering: false,
        searchIsClicked: false,
        search: "",
        menuIsClicked: false,
        isScrolling: false
      };
  }

  componentDidMount(){
    this.props.saveCategory(this.props.match.params.categoryName);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e){
    if(document.body.scrollTop >= 80){
      this.setState({isScrolling: true});
    } else {
      this.setState({isScrolling: false});
    }
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
    let categories = ["business", "culture", "gear", "ideas", "science", "security", "transportation"];
    let images = ["b.png", "c.png", "g.png", "i.png", "s.png", "s2.png", "t.png"];

    return (
        <div className="navigation-bar">

          <NavigationBarTop
            handleClick={this.handleClick}
            menuIsClicked={this.state.menuIsClicked}
            pathname={this.props.location.pathname}
            handleMouseHover={this.handleMouseHover}
            searchIsClicked={this.state.searchIsClicked}
            header={this.props.header.toUpperCase()}
            category={this.props.category}
            />

          { (!this.state.isHovering &&
            !this.state.searchIsClicked &&
            !this.state.menuIsClicked &&
            !this.state.isScrolling) &&
            <NavigationBarBottom
              category={this.props.category}
              categories={categories}
              />
          }
          {
            this.state.isHovering &&
            <NavigationBarSubscribe
              handleMouseHover={this.handleMouseHover}
              handleInput={this.handleInput}
              />
          }
          {
            this.state.searchIsClicked &&
            <NavigationBarSearchContainer
              search={this.state.search}
              handleInput={this.handleInput}
              />
          }
          {
            this.state.menuIsClicked &&
            <NavigationBarMenu
              colors={this.colors}
              pathname={this.props.location.pathname}
              header={this.props.header}
              category={this.props.category}
              categories={categories}
              />
          }
        </div>
    );
  }
}

export default withRouter(NavigationBar);

















// comment
