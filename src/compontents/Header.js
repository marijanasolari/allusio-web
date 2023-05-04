import React from "react"
import { Link } from "react-router-dom"

import appLogo from "../images/logo.svg"

export default function Header() {

  return (
    <header>

        <Link to="/">
            <img src={appLogo} alt="Allusio Logo" />
        </Link>

    </header>
  )
}