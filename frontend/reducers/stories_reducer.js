import merge from 'lodash/merge';

import {RECEIVE_TOP_STORIES,
RECEIVE_MOST_RECENT_STORIES,
RECEIVE_TOP_BUSINESS,
RECEIVE_TOP_ENTERTAINMENT,
RECEIVE_TOP_GENERAL,
RECEIVE_TOP_HEALTH,
RECEIVE_TOP_SCIENCE,
RECEIVE_TOP_SPORTS,
RECEIVE_TOP_TECHNOLOGY,
RECEIVE_STORY,
RECEIVE_SEARCH_STORIES,
RECEIVE_SEARCH_POPULARITY,
RECEIVE_SEARCH_NEWEST,
RECEIVE_SEARCH_RELEVANCY,
RECEIVE_SEARCH_TERM,
RECEIVE_CATEGORY} from '../actions/story_actions';

const defaultState = {
  topStories: {},
  mostRecentStories: {},
  topBusiness: {},
  topEntertainment: {},
  topGeneral: {},
  topHealth: {},
  topScience: {},
  topSports: {},
  topTechnology: {}
};

const StoriesReducer = (oldState=defaultState, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_TOP_STORIES:
    return merge({}, oldState, {topStories: action.topStories.articles});
    case RECEIVE_MOST_RECENT_STORIES:
    return merge({}, oldState, {mostRecentStories: action.mostRecentStories.articles});
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
    case RECEIVE_SEARCH_STORIES:
    return merge({}, oldState, {searchStories: action.searchStories.articles});
    case RECEIVE_SEARCH_POPULARITY:
    return merge({}, oldState, {searchStories: action.searchPopularity.articles});
    case RECEIVE_SEARCH_NEWEST:
    return merge({}, oldState, {searchStories: action.searchNewest.articles});
    case RECEIVE_SEARCH_RELEVANCY:
    return merge({}, oldState, {searchStories: action.searchRelevancy.articles});
    case RECEIVE_SEARCH_TERM:
    return merge({}, oldState, {searchTerm: action.searchTerm});
    case RECEIVE_CATEGORY:
    return merge({}, oldState, {category: action.category});
    default:
    return oldState;
  }
};

export default StoriesReducer;
