import React from 'react'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import styles from './App.module.scss'
import LandingPage from './Components/LandingPage/LandingPage'
import NavBar from './Components/NavBar/NavBar'



const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <NavBar/>
        <main className="has-background-light">
        <Route exact path="/" component={LandingPage} />
        </main>
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
