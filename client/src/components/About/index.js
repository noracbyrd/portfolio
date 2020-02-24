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
                            <img className="responsive-img" id="headshot" src="http://ryanabney.com/nora/nora-serious-square.jpg" alt="Nora with a tiara"></img>
                        </div>
                    </div>
                    <div className="col s12 m8 l8 right">
                        <div id="bio">
                            <p>Nora is a full stack developer with a particular interest in backend. She graduated from the Northwestern Full-Stack Coding Bootcamp in November 2019. Her undergraduate degree is from the University of Pennsylvania in
                                Classical Studies (Greek and Latin), but she eventually decided to spend more time in the twenty-first
                                century.
                                She worked in digital marketing for six and a half years and learned a lot about client services
                                and
                    marketing technology in the process.</p>
                            <br></br>
                            <p><strong>Technologies: </strong>React, Node, Express, Javascript, MongoDB/Mongoose, SQL/Sequelize, jQuery, HTML, CSS, Bootstrap, Materialize, RESTful APIs, MVC, Heroku Deployment, Git, Github </p>
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