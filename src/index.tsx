import React from 'react'

import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'

import './styles/index.css'
import './assets/fonts/Roboto-Medium.ttf'
import './assets/fonts/Roboto-Regular.ttf'
import { App } from './App'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
