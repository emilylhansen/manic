
import { combineReducers } from 'redux';

import StoriesReducer from './stories_reducer';

const EntitiesReducer = combineReducers({
  stories: StoriesReducer
});

export default EntitiesReducer;
