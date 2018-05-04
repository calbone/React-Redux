import React from 'react';
import ReactDOM from 'react-dom';
import './styles/base.scss';
import TodoApp from './contaniers/TodoApp';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { tasksReducer } from './reducers/tasksReducer';

const middleWares = [logger, thunk];
const store = createStore(tasksReducer, applyMiddleware(...middleWares));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <TodoApp />
    </Router>
  </Provider>,
  document.getElementById('root')
);
