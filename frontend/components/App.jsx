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
import Category from './category/category.jsx';
import MostPopular from './most_popular/most_popular.jsx';

const App = () => (
  <div className="app">
    <NavigationBar/>
    <Route exact path="/most-popular" component={MostPopular}/>
    <Route exact path="/category/:categoryName" component={ArticleIndex}/>
    <Route exact path="/category/:categoryName/page" component={Category}/>
    <Route exact path="/" component={ArticleIndex}/>
  </div>
);

export default App;
