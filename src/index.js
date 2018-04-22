import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './contaniers/TodoApp';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { tasksReducer } from './reducers/tasksReducer';

const store = createStore(tasksReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <TodoApp />
    </Router>
  </Provider>, 
  document.getElementById('root')
);
