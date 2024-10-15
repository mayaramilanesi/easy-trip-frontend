import React from 'react';
import './App.css';
import TripList from './components/TripList';
import logo from './assets/logo.png';

function App() {
  return (
    <div className="App">
        <header className="app-header"> 
            <img src={logo} alt="Easy Trip Logo" className="app-logo" />
            <h1>Easy Trip</h1>
      </header>
      <TripList />
    </div>
  );
}

export default App;
