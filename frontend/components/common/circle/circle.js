import React from 'react'
import css from 'styled-jsx/css';

const styles =  css`
    #circle {
        color: red;
    }
`;

const Circle = props => {
    return (
        <React.Fragment>
            <style jsx>{styles}</style>
            <span id="circle">circle</span>
        </React.Fragment>
    )
}

export default Circle;