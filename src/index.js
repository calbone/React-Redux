import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { TodoApp } from './components/TodoApp';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
// import { tasksReducer } from './reducers/tasksReducer';

// const middleWares = [logger, thunk]
// const store = createStore(tasksReducer, applyMiddleware(...middleWares));

ReactDOM.render(
      <TodoApp />,
  document.getElementById('root')
);
// ReactDOM.render(
//   <Provider store={store}>
//     <Router>
//       <TodoApp />
//     </Router>
//   </Provider>, 
//   document.getElementById('root')
// );
