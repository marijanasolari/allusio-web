import React from "react";

import Header from "../compontents/Header"
import AboutMarijana from "../compontents/AboutMarijana"
import Footer from "../compontents/Footer"

export default function About() {
    return (
        <div id="app">
            <Header />
            <main>
                <AboutMarijana />
            </main>
            <Footer />
        </div>
    )
}