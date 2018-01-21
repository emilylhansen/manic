import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavigationBarBottom extends React.Component {
  constructor(props){
      super(props);
  }
  render() {
    return (
      <div className="navigation-bar-bottom">
        <div className="navigation-bar-bottom-section" id="navigation-bar-bottom-section-one">
          <h2><a href={`index.html#/business`}
            onClick={() => window.location.reload()}>BUSINESS</a></h2>
        </div>
        <div className="navigation-bar-bottom-section" id="navigation-bar-bottom-section-two">
          <h2><a href={`index.html#/culture`}
            onClick={() => window.location.reload()}>CULTURE</a></h2>
        </div>
        <div className="navigation-bar-bottom-section" id="navigation-bar-bottom-section-three">
          <h2><a href={`index.html#/design`}
            onClick={() => window.location.reload()}>DESIGN</a></h2>
        </div>
        <div className="navigation-bar-bottom-section" id="navigation-bar-bottom-section-four">
          <h2><a href={`index.html#/gear`}
            onClick={() => window.location.reload()}>GEAR</a></h2>
        </div>
        <div className="navigation-bar-bottom-section" id="navigation-bar-bottom-section-five">
          <h2><a href={`index.html#/science`}
            onClick={() => window.location.reload()}>SCIENCE</a></h2>
        </div>
        <div className="navigation-bar-bottom-section" id="navigation-bar-bottom-section-six">
          <h2><a href={`index.html#/security`}
            onClick={() => window.location.reload()}>SECURITY</a></h2>
        </div>
        <div className="navigation-bar-bottom-section" id="navigation-bar-bottom-section-seven">
          <h2><a href={`index.html#/transportation`}
            onClick={() => window.location.reload()}>TRANSPORTATION</a></h2>
        </div>
      </div>
    );
  }
}

export default withRouter(NavigationBarBottom);
