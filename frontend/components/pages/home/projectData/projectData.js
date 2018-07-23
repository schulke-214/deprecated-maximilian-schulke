import React from 'react';

const ProjectData = props => (
    <div style={{...props.style}} className={`flex column ${ props.classList ? props.classList : "" }`}>
        <span style={{marginBottom: "15px"}} >{props.year}</span>
        <span>{props.category}</span>
    </div>
);


export default ProjectData;