import { combineReducers } from 'redux';
import service from './service';
import history from './supportHistory';

export const rootReducer = combineReducers({
  service,
  history
});
