import React from "react";
// import M from "materialize-css";
import "./style.css";

function PortfolioCard(props) {
  // M.AutoInit()
  return (

    < div className="col s6">
      
          {/* <div className="carousel-fixed-item center card hoverable"> */}
          <div className="card hoverable">
            <div id="layer" className="card-image">
              <img src={props.image} alt={props.alt}></img>
            </div>
            <div className="card-content">
              <h5>{props.title}</h5>
              <p>{props.text}</p>
            </div>
            <div id="link" className="card-action">
              <a id="projectLink" href={props.link}><span className="black-text">View Project</span></a>
            </div>
          </div>
      
    </div>

  )
}

export default PortfolioCard;