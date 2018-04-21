import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import { TodoApp } from './components/TodoApp';
import { createStore } from 'redux';
import { inputTask, addTask } from './actions/tasksActionCreator';
import { tasksReducer } from './reducers/tasksReducer';

const store = createStore(tasksReducer);

function renderApp(store) {
  render(
    <TodoApp store={store} />,
    document.getElementById('root')
  )
}

store.subscribe(()=>renderApp(store));
renderApp(store);

// ReactDOM.render(
//   <App />, 
//   document.getElementById('root')
// );
