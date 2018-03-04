import React from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import ArticleIndexContainer from './article_index/article_index_container.jsx';
import Category from './category/category.jsx';
import MostPopular from './most_popular/most_popular.jsx';
import StoryShowContainer from './story_show/story_show_container.jsx';

const App = () => (
  <div className="app">
    <Route exact path="/most-popular" component={MostPopular}/>
    <Route exact path="/most-recent" component={Category}/>
    <Route exact path="/category/:categoryName" component={ArticleIndexContainer}/>
    <Route exact path="/category/:categoryName/page" component={Category}/>
    <Route exact path="/story/:storyName" component={StoryShowContainer}/>
    <Route exact path="/" component={ArticleIndexContainer}/>
  </div>
);

export default App;
