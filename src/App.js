import './App.css';
import Home from './Components/Home';
import DataContextProvider from './Contexts/DataContext';
import React from 'react';

function App() {
  return (

    <DataContextProvider>
    <div className="App">
      <header className="App-header">
       <Home />
      </header>
    </div>
    </DataContextProvider>
  );
}

export default App;
