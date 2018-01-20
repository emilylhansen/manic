import React from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import ArticleIndex from './article_index/article_index.jsx';
import NavigationBar from './navigation_bar/navigation_bar.jsx';

const App = () => (
  <div className="app">
    <NavigationBar/>
    <Route exact path="/business" component={ArticleIndex}/>
    <Route exact path="/culture" component={ArticleIndex}/>
    <Route exact path="/design" component={ArticleIndex}/>
    <Route exact path="/gear" component={ArticleIndex}/>
    <Route exact path="/science" component={ArticleIndex}/>
    <Route exact path="/security" component={ArticleIndex}/>
    <Route exact path="/transportation" component={ArticleIndex}/>
    <Route exact path="/" component={ArticleIndex}/>
  </div>
);

export default App;
