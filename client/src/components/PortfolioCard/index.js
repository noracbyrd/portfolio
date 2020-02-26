import React from "react";
// import M from "materialize-css";
import "./style.css";
import Aos from "aos"

function PortfolioCard(props) {
  // M.AutoInit()
  Aos.init();
  return (

    < div className="col s12 m6 l6">
      
          {/* <div className="carousel-fixed-item center card hoverable"> */}
          <div data-aos="zoom-in" className="card hoverable">
            <div id="layer" className="card-image">
              <img src={props.image} alt={props.alt}></img>
            </div>
            <div className="card-content">
              <h5>{props.title}</h5>
              <p>{props.text}</p>
              <br></br>
              <p><strong>Built in: {props.tech}</strong></p>
            </div>
            <div id="link" className="card-action">
              <a id="projectLink" href={props.link}><span className="black-text">View Project</span></a>
            </div>
          </div>
      
    </div>

  )
}

export default PortfolioCard;