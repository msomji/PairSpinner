import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import PairsComponent from './Components/PairsComponent/PairsComponent';
import TeamsComponent from './Components/TeamsComponent/TeamsComponent';


const App: React.FC = () => {
  return (
    <>
      <header>
        <h1 className='a'>Pairing App</h1>
      </header>

      <BrowserRouter>
        <Route exact path='/' component={TeamsComponent} />
        <Route exact path='/:teamName' component={PairsComponent} />
      </BrowserRouter>
    </>
  );
};

export default App;
