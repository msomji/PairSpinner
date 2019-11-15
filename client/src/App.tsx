import React from 'react'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import './App.scss'


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        {/* <NavBar />
        <main className="has-background-light">
          <Route exact path="/" component={TeamsComponent} />
          <Route exact path="/profile/:teamName" component={Profile} />
        </main>
        <Footer /> */}
      </div>
    </BrowserRouter>
  )
}

export default App
