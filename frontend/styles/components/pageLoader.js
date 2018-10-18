import css from 'styled-jsx/css';
import variables from '../var';

export default css`
    * {
        pointer-events: none;
    }

    .pl-hide {
        display: block;
        overflow: hidden;
    }

    .pl-hide.logo {
        width: 20px;
        height: 10px;
    }

    #pl {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 10000;
        padding: ${ variables.spacing.layout.marginOut + 'vw' };
    }

    #pl-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: -1;
        background-color: ${ variables.colors.main };
    }

    #pl-count-wrap {
        display: block;
        width: 25px;
        height: 25px;
        z-index: 1000;
        position: absolute;
        top: calc( 50vh - 12.5px );
        left: calc( 50vw - 12.5px );
        text-align: center;
    }

    #pl-count {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        color: ${ variables.colors.highlight };
        font-family: "Spectral";
        text-align: center;
    }

    @media screen and ( max-width: ${ variables.breakpoints.tablet }px ) {
        #pl {
            padding: 50px;
        }
    }

    @media screen and ( max-width:  ${ variables.breakpoints.phone }px ) {
        #pl {
            padding: 37.5px;
        }
    }
`;