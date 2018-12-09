import React from 'react';
import css from 'styled-jsx/css';

const styles = css`
    div {
        display: block;
        width: 100vw;
        height: 100vh;
    }

    img {
        object-fit: cover;
        width: 100vw;
        height: 100vh;
    }
`;

const picture = props => {
    return (
        <React.Fragment>
            <style jsx>{styles}</style>
            <div>
                <img src={props.src} />
            </div>
        </React.Fragment>
    )
}

export default picture;