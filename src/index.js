import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.jsx'
import Countdown from './components/Countdown.jsx'
import Timer from './components/Timer.jsx'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'

import './styles/main.sass'

// Load foundation
import 'foundation-sites/dist/foundation.min.css'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Timer}></IndexRoute>
      <Route path='countdown' component={Countdown}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
