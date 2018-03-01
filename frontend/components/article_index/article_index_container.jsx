import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {fetchTopStories,
fetchTopHealth,
fetchTopSports,
fetchTopGeneral,
fetchTopScience,
fetchTopBusiness,
fetchTopTechnology,
fetchTopEntertainment} from '../../actions/story_actions';

import ArticleIndex from './article_index.jsx';

// topStories: Object.values(state.entities.topStories),
// topHealth: Object.values(state.entities.topHealth),
// topSports: Object.values(state.entities.topSports),
// topGeneral: Object.values(state.entities.topGeneral),
// topScience: Object.values(state.entities.topScience),
// topBusiness: Object.values(state.entities.topBusiness),
// topTechnology: Object.values(state.entities.topTechnology),
// topEntertainment: Object.values(state.entities.topEntertainment)

const mapStateToProps = state => {
  debugger
  return({
    topStories: Object.values(state.entities.stories.topStories),
    topHealth: Object.values(state.entities.stories.topHealth),
    topSports: Object.values(state.entities.stories.topSports),
    topGeneral: Object.values(state.entities.stories.topGeneral),
    topScience: Object.values(state.entities.stories.topScience),
    topBusiness: Object.values(state.entities.stories.topBusiness),
    topTechnology: Object.values(state.entities.stories.topTechnology),
    topEntertainment: Object.values(state.entities.stories.topEntertainment)
  });
};

const mapDispatchToProps = dispatch => ({
  fetchTopStories: () => dispatch(fetchTopStories()),
  fetchTopHealth: () => dispatch(fetchTopHealth()),
  fetchTopSports: () => dispatch(fetchTopSports()),
  fetchTopGeneral: () => dispatch(fetchTopGeneral()),
  fetchTopScience: () => dispatch(fetchTopScience()),
  fetchTopBusiness: () => dispatch(fetchTopBusiness()),
  fetchTopTechnology: () => dispatch(fetchTopTechnology()),
  fetchTopEntertainment: () => dispatch(fetchTopEntertainment())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticleIndex));
