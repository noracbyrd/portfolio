import React, {Component} from 'react';
import Navbar from "../components/Navbar"
import About from "../components/About"
import Portfolio from "../components/Portfolio"
import Contact from "../components/Contact"

// import { Route } from "react-router-dom"


class Home extends Component {
  state = {
    navTitle: "Nora Byrd ~ Full Stack Developer"
  }
  render() {
      const divStyle = {
          backgroundColor: "#ca7a7a"
      }
    return (
      <div className="App">
        <Navbar style={divStyle} title={this.state.navTitle} />
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
              <a href="./singer"><img alt="ncb logo" src="http://ryanabney.com/nora/ncb.png"></img></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
