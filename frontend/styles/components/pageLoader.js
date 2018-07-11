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
`;