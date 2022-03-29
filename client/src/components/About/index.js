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
                            <p>Nora is a full stack developer with a particular interest in frontend. She graduated from the Northwestern Full-Stack Coding Bootcamp in November 2019 and has been working at Accenture ever since. Her undergraduate degree is from the University of Pennsylvania in
                                Classical Studies (Greek and Latin), but she eventually decided to spend more time in the twenty-first
                                century.
                                Before becoming a programmer, she worked in digital marketing for six and a half years and learned a lot about client services
                                and
                    marketing technology in the process.</p>
                            <br></br>
                            <p><strong>Technologies: </strong>React.js, Node.js, Express, Javascript, Materialize CSS, HTML5, ForgeRock JavaScript SDK, ForgeRock IDM, ForgeRock AM, ForgeRock IG, LDAP, MongoDB/Mongoose, SQL/Sequelize, jQuery, Bootstrap, RESTful APIs, MVC, Jenkins, Heroku Deployment, Git, Github, Bitbucket </p>
                            <br></br>
                            <p>AWS Associate Developer Certification</p>
                            <p>In her spare time, Nora loves to sing, whether at traditional Irish sessions, voice lessons, or volunteering with Sharing Notes. She is also an avid reader and has a bit of a comic book habit.</p>
                        </div>
                     </div>
                </div>
            </div>
        )
    }
}

export default About;
