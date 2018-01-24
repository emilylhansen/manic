import React from 'react';
import { Link } from 'react-router-dom';

import ArticleUnitMore from '../article_units/article_unit_more.jsx';

class Footer extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="footer">
        {
          (this.props.pathname !== '/' &&
          !this.props.pathname.includes("page") &&
          !this.props.pathname.includes("most-popular") &&
          !this.props.pathname.includes("most-recent")) &&
          <ArticleUnitMore
            header="more results"
            link={`#${this.props.pathname}/page`}

            />
        }
        <div className="footer-content">
          <div className="footer-content-logo">
            <h3>MANIC</h3>
          </div>
          <div className="footer-content-media horizontal">
            <div className="footer-content-media-item">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </div>
            <div className="footer-content-media-item">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </div>
            <div className="footer-content-media-item">
              <i className="fa fa-pinterest-p" aria-hidden="true"></i>
            </div>
            <div className="footer-content-media-item">
              <i className="fa fa-youtube-play" aria-hidden="true"></i>
            </div>
            <div className="footer-content-media-item">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </div>
          </div>
          <div className="footer-content-links ">
            <ul className="horizontal">
              <li><h2><a>login</a></h2></li>
              <li><h2><a>subscribe</a></h2></li>
              <li><h2><a>advertise</a></h2></li>
              <li><h2><a>site map</a></h2></li>
            </ul>
          </div>
          <div className="footer-content-policy">
            <p>
              CNMN Collection
              <br></br>
              <br></br>
              Use of this site constitutes acceptance of our user agreement (effective 3/21/12) and privacy policy (effective 3/21/12). Affiliate link policy. Your California privacy rights. The material on this site may not be reproduced, distributed, transmitted, cached or otherwise used, except with the prior written permission of Condé Nast.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
