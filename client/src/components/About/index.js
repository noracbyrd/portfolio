import React, { Component } from "react"
import "./style.css"

class About extends Component {
    render() {
        return (
            <div>
                <br></br>
                <br></br>
                <div className="row">
                    <div className="col s6 offset-s3"><span className="flow-text"><a rel="noopener noreferrer" href="https://github.com/noracbyrd" target="_blank">Github</a> | <a rel="noopener noreferrer" href="https://www.linkedin.com/in/nora-byrd-11906a51/" target="_blank">LinkedIn</a></span>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m4 l4 left">
                        <div id="pictureBox">
                            <img className="responsive-img" id="headshot" src="http://ryanabney.com/nora/nora_serious_square.jpg" alt="Nora with a tiara"></img>
                        </div>
                    </div>
                    <div className="col s12 m8 l8 right">
                        <div id="bio">
                            <p>Nora is a full stack developer with a particular interest in backend. She graduated from the University of Pennsylvania with a degree in
                                Classics (Greek and Latin) but eventually decided to spend more time in the twenty-first
                                century.
                                She worked in digital marketing for six and a half years and learned a lot about client services
                                and
                    marketing technology in the process. She is very excited to begin her programming journey!</p>
                            <br></br>
                            <p>In her spare time, Nora loves to sing, whether at traditional Irish sessions, voice lessons, or volunteering with Sharing Notes. She is also an avid reader and has a bit of a comic book habit.</p>
                        </div>
                     </div>
                </div>
            </div>
        )
    }
}

export default About;