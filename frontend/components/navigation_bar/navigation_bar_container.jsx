import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {saveCategory} from '../../actions/story_actions';

import NavigationBar from './navigation_bar.jsx';

const mapStateToProps = state => {
  let category = state.entities.stories.category ? state.entities.stories.category : null;
  return({
    category
  });
};

const mapDispatchToProps = dispatch => ({
  saveCategory: (category) => dispatch(saveCategory(category))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavigationBar));
