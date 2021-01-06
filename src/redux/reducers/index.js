import { combineReducers } from 'redux';

import location from './location';
import weather from './weather';
import degrees from './degrees';

const rootReducer = combineReducers({
  location,
  weather,
  degrees,
});

export default rootReducer;
