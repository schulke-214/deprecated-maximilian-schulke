import css from 'styled-jsx/css';
import variables from '../var';

export default css`
    div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 10000;
        background-color: ${ variables.colors.highlight };
        padding: ${ variables.spacing.layout.marginOut + 'vw' };
    }

    #pageloader-counter {
        display: block;
        width: 25px;
        height: 25px;
        z-index: 1000;
        position: absolute;
        top: calc( 50vh - 12.5px );
        left: calc( 50vw - 12.5px );
        color: ${ variables.colors.main };
        font-family: "Spectral";
    }

    @media screen and ( max-width: ${ variables.breakpoints.tablet }px ) {
        div {
            padding: 50px;
        }
    }

    @media screen and ( max-width:  ${ variables.breakpoints.phone }px ) {
        div {
            padding: 37.5px;
        }
    }
`;