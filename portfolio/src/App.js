import React from 'react'
import { Switch, Route, HashRouter } from 'react-router-dom'
import './App.css'

import ResponsiveDrawer from './Components/Navbar'
import Home from './Components/Home'

function App() {
  return (
    <HashRouter>
      <ResponsiveDrawer />
      <Switch>
        <Route exact path='/' component={Home} />

      </Switch>
    </HashRouter>
  )
}

export default App;
