import css from 'styled-jsx/css';
import variables from '../var';

export default css`
    #mouse-cursor {
        z-index: 1000;
        display: block;
        width: 25px;
        height: 25px;
        border: 2px solid ${ variables.colors.highlight };
        transform-origin: center;
        border-radius: 100%;
        opacity: 0;
    }
`