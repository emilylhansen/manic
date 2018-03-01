// import React from 'react';
// import ReactDOM from 'react-dom';
// import Root from './frontend/components/root.jsx';
//
// document.addEventListener("DOMContentLoaded", ()=> {
//   const root = document.getElementById("root");
//
//   ReactDOM.render(<Root/>, root);
// });

import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {fetchTopStories,
fetchTopHealth,
fetchTopSports,
fetchTopGeneral,
fetchTopScience,
fetchTopBusiness,
fetchTopTechnology,
fetchTopEntertainment} from './actions/story_actions';

document.addEventListener("DOMContentLoaded", ()=> {
  const root = document.getElementById("root");
  let store = configureStore();

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchTopStories = store.fetchTopStories;
  window.fetchTopHealth = store.fetchTopHealth;
  window.fetchTopSports = store.fetchTopSports;
  window.fetchTopGeneral = store.fetchTopGeneral;
  window.fetchTopScience = store.fetchTopScience;
  window.fetchTopBusiness = store.fetchTopBusiness;
  window.fetchTopTechnology = store.fetchTopTechnology;
  window.fetchTopEntertainment = store.fetchTopEntertainment;

  ReactDOM.render(<Root store={store} />, root);
});
