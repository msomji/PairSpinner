import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import TeamsComponent from './Components/TeamsComponent/TeamsComponent';
import Profile from './Components/Profile/Profile';
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer';

const App: React.FC = () => {
  return (
    <div className="app">
      <NavBar />
      <main>
        <BrowserRouter>
          <Route exact path='/' component={TeamsComponent} />
          <Route exact path='/profile/:teamName' component={Profile} />
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
};

export default App;;;
