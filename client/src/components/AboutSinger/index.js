import React, { Component } from "react"
import "./style.css"

class AboutSinger extends Component {
    render() {
        return (
            <div>
                <br></br>
                <br></br>
                <div className="row">
                    <div className="col s6 offset-s3"><span className="flow-text"><h4 className="aSinger">And she sings, too!</h4></span>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m4 l4 left">
                        <div id="pictureBox">
                            <img className="responsive-img" id="headshotSinger" src="http://ryanabney.com/nora/nora_fun_square.jpg" alt="Nora with a tiara"></img>
                        </div>
                    </div>
                    <div className="col s12 m8 l8 right">
                        <div id="bio">
                            <p>Nora is a classically trained singer who enjoys singing traditional Irish music and showtunes in addition to operatic repertoire. She can sing comfortably as both a lyric soprano and a mezzo-soprano, which has provided its fair share of identity crises over the years!</p>
                            <br></br>
                            <p>Nora is available for wedding and funeral services and Irish sessions.</p>
                        </div>
                     </div>
                </div>
            </div>
        )
    }
}

export default AboutSinger;