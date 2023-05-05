import React from "react"
import { Link } from "react-router-dom"

import menuIcon from "../images/icon-menu.svg"

export default function Navigation() {
    const [active, setActive] = React.useState(false);
    const handleClick = () => {
      setActive(!active);
    };  

    return (
        <nav id="mainNav" style={{ 
                width: active ? "285px" : "0" ,
                padding: active ? "0px 72px" : "0"
            }}>
            <button id="menuIcon" 
                onClick={handleClick}
            >
                <img src={menuIcon} alt="Menu icon" style={{ 
                    transform: active ? "rotate(90deg)" : "rotate(0deg)"
                }} />
            </button>
            <ul style={{ 
                opacity: active ? "1" : "0"
            }}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}