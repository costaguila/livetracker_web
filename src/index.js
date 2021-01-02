import React from 'react';
import ReactDOM from 'react-dom';


import { BrowserRouter, Switch, Route }  from 'react-router-dom'
import Leaflet from "leaflet";

import './index.css';
import './style/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home/';
import About from './pages/About/';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
