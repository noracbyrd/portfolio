import React, { Component } from 'react'
import NavbarSinger from "../components/NavbarSinger"
import AboutSinger from "../components/AboutSinger"
import PortfolioSinger from "../components/PortfolioSinger"
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
                    <PortfolioSinger />
                    <br></br>
                    <br></br>
                    <Contact />
                    <div className="row">
                        <div className="secretLink">
                            <a href="/"><img alt="ncb logo" src="http://ryanabney.com/nora/ncb-pink.png"></img></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Singer