import React from 'react'
import { Switch, Route, HashRouter, Router } from 'react-router-dom'
import './App.css'

import ResponsiveDrawer from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/AboutMe'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'

function App() {
  return (
    <HashRouter>
      <ResponsiveDrawer />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/contact' component={Contact} />

      </Switch>
    </HashRouter>
  )
}

export default App;
