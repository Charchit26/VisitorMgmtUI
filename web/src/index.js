import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// Code to start webcam and stream the data into element with id 'camera'

//   navigator.webkitGetUserMedia({
//       video: true
//     },
//     function(stream) {
//       document.getElementById('camera').srcObject = stream;
//     },
//     function() {
//       alert('could not connect to webcam');
//     }
//   );
  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
