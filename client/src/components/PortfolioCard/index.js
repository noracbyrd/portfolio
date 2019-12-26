import React from "react";
import "./style.css";

function PortfolioCard(props) {
  return (
    <div>
     
      <div className="row">
        <div className="col s12">
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
      </div>
   
    </div>
  )
}

export default PortfolioCard;