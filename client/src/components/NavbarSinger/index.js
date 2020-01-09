import React from "react";
import "./style.css";

function NavbarSinger(props) {
        return (
            <nav className="singerNav">
                <div className="container">
                    <div className="brand-logo">{props.title}</div>
                </div>
            </nav>
                )
        }
        export default NavbarSinger;
