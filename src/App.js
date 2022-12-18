import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Work from "./pages/Work"
import About from "./pages/About"
import Contact from "./pages/Contact"

import Navigation from "./compontents/Navigation"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                    <Route index element={<Home />} />
                    <Route path="work" element={<Work />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<Home />} />
            </Routes>
            <Navigation />
        </BrowserRouter>
        
    )

}

