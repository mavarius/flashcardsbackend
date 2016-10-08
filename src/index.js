import React from 'react'
import { render } from 'react-dom'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './components/Layout'
import HomeView from './components/HomeView'
import TestView from './components/TestView'
import AdminView from './components/AdminView'

render(
  <Router history={browserHistory}>

    <Route path="/" component={Layout}>
      <IndexRoute component={HomeView} />
      <Route path="/test" component={TestView} />
      <Route path="/admin" component={AdminView} />
    </Route>

  </Router>,
  document.getElementById('root')
)
