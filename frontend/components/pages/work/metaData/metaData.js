import React from 'react';
import css from 'styled-jsx/css';

const styles = css`
    #container {
        width: 100%;
        height: 50vh;
        display: block;
        border: 1px solid red;
    }
`;

export default props => {

    return (
        <React.Fragment>
            <style jsx>{ styles }</style>
            <div id="container" >
                <div>
                    kek
                </div>
            </div>
        </React.Fragment>
    );
}