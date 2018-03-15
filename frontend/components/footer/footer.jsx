import React from 'react';
import { Link } from 'react-router-dom';

import ArticleUnitMore from '../article_units/article_unit_more.jsx';

const Footer = props => {
  return (
    <div className="footer">
      {
        (props.pathname !== '/' &&
        !props.pathname.includes("page") &&
        !props.pathname.includes("most-popular") &&
        !props.pathname.includes("story") &&
        !props.pathname.includes("most-recent")) &&
        <ArticleUnitMore
          header="more results"
          link={`#${props.pathname}/page`}
          />
      }
      <div className="footer-content">
        <div className="footer-content-logo">
          <h3><a href="#/">MANIC</a></h3>
        </div>
        <div className="footer-content-media horizontal">
          <div className="footer-content-media-item">
            <a href="https://www.facebook.com/wired" target="_blank">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </div>
          <div className="footer-content-media-item">
            <a href="https://twitter.com/wired" target="_blank">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </div>
          <div className="footer-content-media-item">
            <a href="https://www.pinterest.com/wired/" target="_blank">
              <i className="fa fa-pinterest-p" aria-hidden="true"></i>
            </a>
          </div>
          <div className="footer-content-media-item">
            <a href="https://www.youtube.com/wired" target="_blank">
              <i className="fa fa-youtube-play" aria-hidden="true"></i>
            </a>
          </div>
          <div className="footer-content-media-item">
            <a href="https://www.instagram.com/wired/" target="_blank">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
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
            Use of this site constitutes acceptance of our user agreement (effective 3/21/12) and privacy policy (effective 3/21/12). Affiliate link policy. Your California privacy rights. The material on this site may not be reproduced, distributed, transmitted, cached or otherwise used, except with the prior written permission of Condé Nast.
            <br></br>
            <br></br>
            <a href="https://newsapi.org/">Powered by News API: an API where objects don't have unique ids :(</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
