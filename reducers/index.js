import { combineReducers } from 'redux';

import story from './story';
import setting from './setting';

export default combineReducers({
  story,
  setting,
});
