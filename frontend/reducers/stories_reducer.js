import merge from 'lodash/merge';

import {RECEIVE_TOP_STORIES,
RECEIVE_TOP_BUSINESS,
RECEIVE_TOP_ENTERTAINMENT,
RECEIVE_TOP_GENERAL,
RECEIVE_TOP_HEALTH,
RECEIVE_TOP_SCIENCE,
RECEIVE_TOP_SPORTS,
RECEIVE_TOP_TECHNOLOGY,
RECEIVE_STORY} from '../actions/story_actions';

const defaultState = {
  topStories: {},
  topBusiness: {},
  topEntertainment: {},
  topGeneral: {},
  topHealth: {},
  topScience: {},
  topSports: {},
  topTechnology: {},
  story: null
};

const StoriesReducer = (oldState=defaultState, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_TOP_STORIES:
    return merge({}, oldState, {topStories: action.topStories.articles});
    case RECEIVE_TOP_BUSINESS:
    return merge({}, oldState, {topBusiness: action.topBusiness.articles});
    case RECEIVE_TOP_ENTERTAINMENT:
    return merge({}, oldState, {topEntertainment: action.topEntertainment.articles});
    case RECEIVE_TOP_GENERAL:
    return merge({}, oldState, {topGeneral: action.topGeneral.articles});
    case RECEIVE_TOP_HEALTH:
    return merge({}, oldState, {topHealth: action.topHealth.articles});
    case RECEIVE_TOP_SCIENCE:
    return merge({}, oldState, {topScience: action.topScience.articles});
    case RECEIVE_TOP_SPORTS:
    return merge({}, oldState, {topSports: action.topSports.articles});
    case RECEIVE_TOP_TECHNOLOGY:
    return merge({}, oldState, {topTechnology: action.topTechnology.articles});
    case RECEIVE_STORY:
    return merge({}, oldState, {story: action.story});
    default:
    return oldState;
  }
};

export default StoriesReducer;
