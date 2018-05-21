import { combineReducers } from 'redux';
import service from './supportService';
import history from './supportHistory';

export const rootReducer = combineReducers({
  service,
  history
});
