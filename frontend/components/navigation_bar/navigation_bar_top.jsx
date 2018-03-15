import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const NavigationBarTop = props => {

  const getHeader = () => {
    let pathname = props.pathname;
    if(pathname === "/") {
      return <h3>MANIC</h3>;
    } else if (pathname.includes("business") ||
              pathname.includes("culture") ||
              pathname.includes("gear") ||
              pathname.includes("ideas") ||
              pathname.includes("science") ||
              pathname.includes("security") ||
              pathname.includes("transportation") ||
              pathname.includes("most-popular") ||
              pathname.includes("most-recent")) {
      return <h3>{props.header}</h3>;
    } else {
      return <p>{props.header}</p>;
    }
  };

  const getClass = () => {
    for(let i = 0; i < props.categories.length; i++) {
      if (props.categories[i] === props.category) {
        return `navigation-bar-top-${i+1} navigation-bar-top-active`;
      }
    }
  };

  return (
    <div className={`navigation-bar-top
        ${getClass()}`}>
      <div className="navigation-bar-top-section horizontal">
        <h2 onClick={() => props.handleClick("menuIsClicked")}>
          { props.menuIsClicked ?
            <i className="fa fa-times" aria-hidden="true"></i>
            :
            <i className="fa fa-bars" aria-hidden="true"></i>
          }
        </h2>
        <h3>
          { (props.pathname !== "/") &&
            <a href={`index.html#`} onClick={() => window.location.reload()}>
              MANIC
            </a>
          }
        </h3>
      </div>
      <div className="navigation-bar-top-section">
        {getHeader()}
      </div>
      <div className="navigation-bar-top-section horizontal">
        <h2 onMouseEnter={props.handleMouseHover}>
          SUBSCRIBE
        </h2>
        <h2 onClick={() => props.handleClick("searchIsClicked")}>
          { props.searchIsClicked ?
            <i className="fa fa-times" aria-hidden="true"></i>
            :
            <i className="fa fa-search" aria-hidden="true"></i>
          }
        </h2>
      </div>
    </div>
  );
};

export default withRouter(NavigationBarTop);

















// comment
