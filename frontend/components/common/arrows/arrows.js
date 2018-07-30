import React from 'react';

import styles from '../../../styles/components/arrows';

const Arrows = props => (
    <React.Fragment>
        <style jsx>{styles}</style>
        <span className="arrow-container" >
            <span onClick={props.prev} className="arrow-box" >
                <svg viewBox="0 0 40 40" >
                    <polyline className="path" points="25.4 22.55 20 17.15 14.6 22.55"></polyline>
                </svg>
            </span>
            <span onClick={props.next} className="arrow-box"  >
                <svg viewBox="0 0 40 40" style={{transform: "rotate(180deg)"}} >
                    <polyline className="path" points="25.4 22.55 20 17.15 14.6 22.55"></polyline>
                </svg>
            </span>
        </span>
    </React.Fragment>
);

export default Arrows;