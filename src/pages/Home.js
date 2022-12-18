import React from "react"

import Header from "../compontents/Header"
import WelcomeAllusio from "../compontents/WelcomeAllusio"
import Footer from "../compontents/Footer"

export default function Home() {
    return (
        <div id="app">
            <Header />
            <main>
                <WelcomeAllusio />
            </main>
            <Footer />
        </div>

    )

}