import css from 'styled-jsx/css';
import variables from '../var';

export default css`
    #home-inner {
        position: relative;
        width: 100%;
        height: 100%;

        border: 1px solid grey;
    }

    #home-wrapper {
        position: absolute;

        display: flex;
        flex-direction: column;

        top: 0;
        left: calc( 50% - 160px );
        width: 320px;
        height: 100%;


        border: 1px solid red;
    } 

    #home-top {
        flex: 1 1 0;
        border: 1px solid orange;
    }

    #home-lower {
        flex: 1 1 0;
        border: 1px solid orange;
    }

    #projectTitle {
        position: absolute;
        top: calc(50% - 37.5px);
        font-family: 'Spectral';
        font-weight: 600;
        font-size: 80px;
        white-space: nowrap;
        height: 75px;
        width: 100%;
        text-align: center;
        text-transform: lowercase;
        transition: all 0.5s ease-in-out;
        transition-property: font-size height top;
    }
`;