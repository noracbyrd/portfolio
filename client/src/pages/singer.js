import React, { Component } from 'react'
import NavbarSinger from "../components/NavbarSinger"
import AboutSinger from "../components/AboutSinger"
import Portfolio from "../components/Portfolio"
import Contact from "../components/Contact"


class Singer extends Component {
    state = {
        navTitle: "Nora Byrd ~ Singer"
    }
    render() {
        return (
            <div className="App">
                <NavbarSinger title={this.state.navTitle} />
                <div className="container">
                    <AboutSinger />
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
}

export default Singer