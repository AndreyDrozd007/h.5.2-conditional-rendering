import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Loader from './Loader'
import './Loader.css'
import Data from './Data'
import './Data.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Loader />
    <Data />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

