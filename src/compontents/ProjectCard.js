import React from "react"

import circleButton from "../images/circle-button.svg"
import projectImage from "../images/projects/MondBank.png"

export default function Project(props) {
    let badgeText
    if (props.new) {
        badgeText = "New"
    }

    return (
        <div className="project">
            <div className="project-info">
                <div className="header">
                    <h3>
                        Project
                        {badgeText && <span className="newTag">{badgeText}</span>}
                    </h3>
                    <h1>{props.name}</h1>
                    <ul className="tags">
                    </ul>
                </div>
                <div className="content">
                    <p className="excerpt">{props.excerpt}</p>
                    <button className="see-more">
                        <img src={circleButton} alt="Read more" />
                    </button>
                </div>
            </div>
            <div className="project-image">
                <img src={require(`../images/projects/${props.img}`)} alt={props.name} />
            </div>
        </div>
    )
}