import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import NavigationBar from '../navigation_bar/navigation_bar.jsx';
import Footer from '../footer/footer.jsx';
import Loading from '../loading/loading.jsx';

class StoryShow extends React.Component {
  constructor(props){
      super(props);
  }

  render(){
    return (
      <div>
        <NavigationBar
          header={this.props.location.pathname === "/" ? "" : this.props.match.params.categoryName}
          />
        <div className="story-show">
          <div className="horizontal">
            <div className="story-show-share">
            </div>
            <div className="story-show-article">
              <div>hi</div>
            </div>
            <div className="story-show-popular">
            </div>
          </div>
        </div>
        <Footer
          pathname={this.props.location.pathname}
          />
      </div>
    );
  }
}

export default withRouter(StoryShow);

















// comment
