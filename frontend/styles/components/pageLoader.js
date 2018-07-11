import css from 'styled-jsx/css';
import variables from '../var';

export default css`
    div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 999;
        background-color: ${ variables.colors.main };
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
    }

    #pageloader-counter {
        display: block;
        width: 25px;
        height: 25px;
        position: absolute;
        top: calc( 50vh - 12.5px );
        left: calc( 50vw - 12.5px );
        font-family: "Spectral";
    }
`;