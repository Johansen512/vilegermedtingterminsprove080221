import './App.css';
import Home from './Components/Home';
import Loginform from './Components/Loginform'
import DataContextProvider from './Contexts/DataContext';
import React from 'react';
import { Router } from '@reach/router';

function App() {
  return (

    <DataContextProvider>
<div className="App-header">
      <Router >
    
     
       <Home path="/" />
       <Loginform path="Loginform"/>
      
    
    </Router>

    </div>

    </DataContextProvider>
  );
}

export default App;
