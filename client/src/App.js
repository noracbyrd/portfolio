import React from 'react';
import Navbar from "./components/Navbar"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
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
        <br></br>
        <br></br>
        <Contact />
      </div>
    </div>
  );
}

export default App;
