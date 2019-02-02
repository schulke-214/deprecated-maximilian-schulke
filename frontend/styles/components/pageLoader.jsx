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
`;