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
    <Route exact path="/" component={ArticleIndex}/>
  </div>
);

export default App;
