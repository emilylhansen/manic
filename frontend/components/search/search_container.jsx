import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {searchStories,
        searchPopularity,
        searchNewest,
        searchRelevancy,
        fetchTopStories,
        receiveSearchTerm} from '../../actions/story_actions';

import Search from './search.jsx';

const mapStateToProps = state => {
  let stories = state.entities.stories.searchStories ?
                Object.values(state.entities.stories.searchStories) :
                [];
  let topStories = state.entities.stories.topStories ?
                   Object.values(state.entities.stories.topStories) :
                   [];
  let searchTerm = state.entities.stories.searchTerm ? state.entities.stories.searchTerm : null;

  return({
    stories: stories,
    topStories: topStories,
    searchTerm: searchTerm
  });
};

const mapDispatchToProps = dispatch => ({
  searchStories: (words) => dispatch(searchStories(words)),
  searchPopularity: (words) => dispatch(searchPopularity(words)),
  searchNewest: (words) => dispatch(searchNewest(words)),
  searchRelevancy: (words) => dispatch(searchRelevancy(words)),
  fetchTopStories: () => dispatch(fetchTopStories()),
  receiveSearchTerm: (searchTerm) => dispatch(receiveSearchTerm(searchTerm))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
