import css from 'styled-jsx/css';
import variables from '../var';

export default css`
    div {
        z-index: -1;
        position: absolute;
        left: calc( 50% - 120px );
        top: 0;
        width: 240px/*25%*/;
        height: 100%;
        background-color: salmon;
        overflow: hidden;
    }

    img {
        display: block;
        height: 100%;

        width: 100%;
        
        object-fit: cover;

        position: absolute;
        top: 0;
        left: 0;
    }

    @media screen and ( max-width: ${ variables.breakpoints.tablet }px ) {
        div {
            position: relative;
            top: 0;
            left: 0;
            width: 100%;
            height: 50vh;
        }
    }
`;