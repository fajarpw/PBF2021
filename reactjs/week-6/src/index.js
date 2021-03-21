import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import MainReducer from './Reducers/MainReducers'
import './index.css';
import App from './App';
import CreateTodo from './Container/CreateTodo'
import Table from './Container/Table'
import reportWebVitals from './reportWebVitals';

// const store = compose(window.dvToolsExtension ? window.devToolsExtension() : f => (f)(createStore)(MainReducer))
const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)(MainReducer)

ReactDOM.render(
  <Provider store={store}>
    <CreateTodo />
    <Table />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
