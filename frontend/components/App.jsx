import React from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import StoryIndex from './story_index/story_index.jsx';
import NavigationBar from './navigation_bar/navigation_bar.jsx';

const App = () => (
  <div className="app">
    <NavigationBar/>
    <Route exact path="/top-stories" component={StoryIndex}/>
  </div>
);

export default App;
