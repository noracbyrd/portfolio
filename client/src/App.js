import React from 'react';
import Navbar from "./components/Navbar"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <About />
        <br></br>
        <br></br>
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
