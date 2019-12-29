import React, { Component } from "react"
import PortfolioCard from "../PortfolioCard"
// import M from "materialize-css"
import "./style.css"


class Portfolio extends Component {
    state = {
        projects: [
            {
                "key": 1,
                "title": "ALL ABOUT EVE, CONTRIBUTOR",
                "text": "All About Eve is a crowd-sourcing health page by women, for women; a space for women to discuss women's health issues and products openly and frankly.",
                "link": "https://radiant-hamlet-57340.herokuapp.com",
                "image": "http://ryanabney.com/nora/allaboutevetn.png",
                "alt": "All About Eve thumbnail"
            },
            {
                "key": 2,
                "title": "CHICAGO SCHOOL SEARCH, CONTRIBUTOR",
                "text": "Chicago School Search allows Chicago citizens to find data about their local schools, and also provides them with an easy way to contact their local alderman.",
                "link": "https://chicago-school-info.herokuapp.com/",
                "image": "http://ryanabney.com/nora/chicagoschoolsearch.png",
                "alt": "Chicago School Search thumbnail"
            },
            {
                "key": 3,
                "title" : "MEMORY GAME",
                "text" : "The goal of this game, built in React, is to click all of the pictures without clicking on the same one twice.",
                "link" : "https://stormy-castle-50493.herokuapp.com/",
                "image" : "http://ryanabney.com/nora/memorygame.png",
                "alt" : "Memory Game thumbnail"
            },
            {
                "key": 4,
                "title" : "GLAMAZON",
                "text" : "This CLI project in Node.js creates a mock online retail store, loosely modeled after one that rhymes with...Glamazon...",
                "link" : "https://github.com/noracbyrd/glamazon-db",
                "image" : "http://ryanabney.com/nora/glamzon.png",
                "alt" : "Glamazon thumbnail"
            },
            {
                "key": 5,
                "title" : "LIRI",
                "text" : "This CLI project in Node.js creates a program that can accept a finite number of commands, performs different kinds of serches for the commands, and returns relevant data from the searches.",
                "link" : "https://github.com/noracbyrd/liri-node-app",
                "image" : "http://ryanabney.com/nora/liri.png",
                "alt" : "LIRI thumbnail"
            }
        ]
    }
    
    componentDidMount(){
        // M.AutoInit();
    }

    render() {
        return (
            <div className="container">
                {/* looping through my included projects */}
                <div className="row">
                    <div className="col s6 offset-s3">
                        <h4>Projects</h4>
                    </div>
                </div>
                <div className="row">
                    
                {this.state.projects.map(project => (
                    // <div data-aos="zoom-in-up" data-aos-duration="1200" data-aos-easing = "linear">
                        <div key={project.key}>
                            <PortfolioCard 
                            title={project.title}
                                text={project.text}
                                link={project.link}
                                image={project.image}
                                alt={project.alt}
                            />
                        </div>
                        // </div>
                ))}
                
                </div>
            </div>
        )
    }
}

export default Portfolio;