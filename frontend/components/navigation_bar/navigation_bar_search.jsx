import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavigationBarSearch extends React.Component {
  constructor(props){
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveSearchTerm(this.props.search);
    this.props.history.push(`/search/${this.props.search.split(/[^A-Za-z]/).join("+")}`);
  }

  render() {
    return (
      <div className="navigation-bar-search-window">
        <div className="navigation-bar-search-window-form">
          <form onSubmit={this.handleSubmit} className="navigation-bar-search-window-form">
            <input type="text" name="search"
              value={this.props.search}
              onChange={this.props.handleInput('search')}
              placeholder="Search"/>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(NavigationBarSearch);
