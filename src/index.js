import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import ReactGA from "react-ga4";

ReactGA.initialize("G-9M3RXE08M4");
ReactGA.send("pageview");


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

