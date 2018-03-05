import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {receiveSearchTerm} from '../../actions/story_actions';

import NavigationBarSearch from './navigation_bar_search.jsx';

const mapStateToProps = state => {
  return({
  });
};

const mapDispatchToProps = dispatch => ({
  receiveSearchTerm: (searchTerm) => dispatch(receiveSearchTerm(searchTerm))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavigationBarSearch));
