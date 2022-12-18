import React from "react"

import Header from "../compontents/Header"
import Project from "../compontents/ProjectCard"
import ProjectData from "../compontents/ProjectData"
import Footer from "../compontents/Footer"

export default function Work() {
    const ProjectElements = ProjectData.map(project => {
        return (
            <Project 
                key={project.id}
                {...project}
            />
        )
    })

    return (
        
        <div id="app">
            <Header />
            <main>
                <div id="projects">
                    {ProjectElements}
                </div>
            </main>
            <Footer />
        </div>
    )
}

