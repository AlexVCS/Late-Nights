import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import Nav from './Components/App/Nav/navigation'
import App from './Components/App'
import './scss/style.scss'



ReactDOM.render(
  <Router>
    <Nav />
    <App />
  </Router>,
  document.getElementById('root'))
