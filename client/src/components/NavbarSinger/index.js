import React from "react";
import "./style.css";

function Navbar(props) {
        return (
            <nav>
                <div className="container">
                    <div className="brand-logo">{props.title}</div>
                </div>
            </nav>
                )
        }
        export default Navbar;
