import React from "react"

import appLogo from "../images/logo.svg"
import menuIcon from "../images/icon-menu.svg"

export default function Header() {
    return (
        <header>
            <img src={appLogo} alt="Allusio Logo" />
            <img src={menuIcon} alt="Menu icon"  />
        </header>
    )
}