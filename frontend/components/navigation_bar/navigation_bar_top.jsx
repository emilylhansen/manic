import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavigationBarTop extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div id="navigation-bar-top">
        <div className="navigation-bar-top-section horizontal">
          <h2 onClick={() => this.props.handleClick("menuIsClicked")}>
            { this.props.menuIsClicked ?
              <i className="fa fa-times" aria-hidden="true"></i>
              :
              <i className="fa fa-bars" aria-hidden="true"></i>
            }
          </h2>
          <h3>
            { (this.props.pathname !== "/") &&
              <a href={`index.html#`} onClick={() => window.location.reload()}>
                MANIC
              </a>
            }
          </h3>
        </div>
        <div className="navigation-bar-top-section">
          {
            this.props.pathname !== "/" ?
            <p>{this.props.header}</p> :
            <h3>MANIC</h3>
          }
        </div>
        <div className="navigation-bar-top-section horizontal">
          <h2 onMouseEnter={this.props.handleMouseHover}>
            SUBSCRIBE
          </h2>
          <h2 onClick={() => this.props.handleClick("searchIsClicked")}>
            { this.props.searchIsClicked ?
              <i className="fa fa-times" aria-hidden="true"></i>
              :
              <i className="fa fa-search" aria-hidden="true"></i>
            }
          </h2>
        </div>
      </div>
    );
  }
}

export default withRouter(NavigationBarTop);

















// comment
