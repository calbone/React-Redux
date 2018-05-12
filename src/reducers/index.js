import { combineReducers } from 'redux';
import service from './service';
import history from './history';

export const rootReducer = combineReducers({
  service,
  history
});
