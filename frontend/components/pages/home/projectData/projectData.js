import React from 'react'

const ProjectData = props => {
    return (
        <div style={{ height: "50px", marginBottom: "calc( 7.5vh - 50px )" }} className={`flex column ${ props.classList ? props.classList : "" }`}>
            <span style={{marginBottom: "15px"}} >{props.year}</span>
            <span>{props.category}</span>
        </div>
    )
}

export default ProjectData;