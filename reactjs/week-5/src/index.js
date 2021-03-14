import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BasicExample from './myApp'
import ParamsExample from './myApp2'
import NestingExample from './myApp3'
import AuthExample from './myApp4'
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//ReactDOM.render(<BasicExample/>, document.getElementById('root'))

//ReactDOM.render(<ParamsExample/>, document.getElementById('root'))

//ReactDOM.render(<NestingExample/>, document.getElementById('root'))

ReactDOM.render(<AuthExample/>, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
