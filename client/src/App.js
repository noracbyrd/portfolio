import React from 'react';
import Navbar from "./components/Navbar"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import "./App.css"
// import { Route } from "react-router-dom"


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
        <div className="row">
          <div className="secretLink">
            <a><img alt="ncb logo" src="http://ryanabney.com/nora/ncb.png"></img></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
