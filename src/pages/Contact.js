import React from "react"

import Header from "../compontents/Header"
import ContactForm from "../compontents/ContactForm"
import Footer from "../compontents/Footer"

export default function Contact() {
    return (
        <div id="app">
            <Header />
            <main>
                <ContactForm />
            </main>
            <Footer />
        </div>

    )

}