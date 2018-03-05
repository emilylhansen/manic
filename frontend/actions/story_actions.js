import * as StoryApiUtil from '../util/story_api_util';

export const RECEIVE_TOP_STORIES = 'RECEIVE_TOP_STORIES';
export const RECEIVE_TOP_BUSINESS = 'RECEIVE_TOP_BUSINESS';
export const RECEIVE_TOP_ENTERTAINMENT = 'RECEIVE_TOP_ENTERTAINMENT';
export const RECEIVE_TOP_GENERAL = 'RECEIVE_TOP_GENERAL';
export const RECEIVE_TOP_HEALTH = 'RECEIVE_TOP_HEALTH';
export const RECEIVE_TOP_SCIENCE = 'RECEIVE_TOP_SCIENCE';
export const RECEIVE_TOP_SPORTS = 'RECEIVE_TOP_SPORTS';
export const RECEIVE_TOP_TECHNOLOGY = 'RECEIVE_TOP_TECHNOLOGY';
export const RECEIVE_STORY = 'RECEIVE_STORY';
export const RECEIVE_SEARCH_STORIES = 'RECEIVE_SEARCH_STORIES';
export const RECEIVE_SEARCH_TERM = 'RECEIVE_SEARCH_TERM';
export const RECEIVE_MOST_RECENT_STORIES = 'RECEIVE_MOST_RECENT_STORIES';

export const receiveTopStories = topStories => ({
  type: RECEIVE_TOP_STORIES,
  topStories
});

export const receiveMostRecentStories = mostRecentStories => ({
  type: RECEIVE_MOST_RECENT_STORIES,
  mostRecentStories
});

export const receiveTopBusiness = topBusiness => ({
  type: RECEIVE_TOP_BUSINESS,
  topBusiness
});

export const receiveTopEntertainment = topEntertainment => ({
  type: RECEIVE_TOP_ENTERTAINMENT,
  topEntertainment
});

export const receiveTopGeneral = topGeneral => ({
  type: RECEIVE_TOP_GENERAL,
  topGeneral
});

export const receiveTopHealth = topHealth => ({
  type: RECEIVE_TOP_HEALTH,
  topHealth
});

export const receiveTopScience = topScience => ({
  type: RECEIVE_TOP_SCIENCE,
  topScience
});

export const receiveTopSports = topSports => ({
  type: RECEIVE_TOP_SPORTS,
  topSports
});

export const receiveTopTechnology = topTechnology => ({
  type: RECEIVE_TOP_TECHNOLOGY,
  topTechnology
});

export const receiveSearchStories = searchStories => ({
  type: RECEIVE_SEARCH_STORIES,
  searchStories
});

export const receiveSearchTerm = searchTerm => ({
  type: RECEIVE_SEARCH_TERM,
  searchTerm
});

export const fetchTopStories = () => dispatch => (
  StoryApiUtil.fetchTopStories().then(
    topStories => dispatch(receiveTopStories(topStories)))
);

export const fetchMostRecentStories = () => dispatch => (
  StoryApiUtil.fetchMostRecentStories().then(
    mostRecentStories => dispatch(receiveMostRecentStories(mostRecentStories)))
);

export const fetchTopBusiness = () => dispatch => (
  StoryApiUtil.fetchTopBusiness().then(
    topBusiness => dispatch(receiveTopBusiness(topBusiness)))
);

export const fetchTopEntertainment = () => dispatch => (
  StoryApiUtil.fetchTopEntertainment().then(
    topEntertainment => dispatch(receiveTopEntertainment(topEntertainment)))
);

export const fetchTopGeneral = () => dispatch => (
  StoryApiUtil.fetchTopGeneral().then(
    topGeneral => dispatch(receiveTopGeneral(topGeneral)))
);

export const fetchTopHealth = () => dispatch => (
  StoryApiUtil.fetchTopHealth().then(
    topHealth => dispatch(receiveTopHealth(topHealth)))
);

export const fetchTopScience = () => dispatch => (
  StoryApiUtil.fetchTopScience().then(
    topScience => dispatch(receiveTopScience(topScience)))
);

export const fetchTopSports = () => dispatch => (
  StoryApiUtil.fetchTopSports().then(
    topSports => dispatch(receiveTopSports(topSports)))
);

export const fetchTopTechnology = () => dispatch => (
  StoryApiUtil.fetchTopTechnology().then(
    topTechnology => dispatch(receiveTopTechnology(topTechnology)))
);

export const searchStories = words => dispatch => (
  StoryApiUtil.searchStories(words).then(
    stories => dispatch(receiveSearchStories(stories))
  )
);
