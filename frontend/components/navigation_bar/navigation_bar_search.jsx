import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavigationBarBottom extends React.Component {
  constructor(props){
      super(props);
  }
  render() {
    return (
      <div className="navigation-bar-search-window">
        <div className="navigation-bar-search-window-form">
          <input type="text" name="search"
            value={this.props.search}
            onChange={this.props.handleInput('search')}
            placeholder="Search"/>
        </div>
      </div>
    );
  }
}

export default withRouter(NavigationBarBottom);
