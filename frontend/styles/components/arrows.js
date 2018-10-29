import css from "styled-jsx/css";
import variables from '../var';

export default css`
    .arrow-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 120px;
    }
    
    .arrow-box {
        display: block;
        width: 40px;
        height: 40px;
    }

    circle {
        mix-blend-mode: exclusion;
    }

    .path {
        fill: none;
        stroke-width: 2;
        mix-blend-mode: exclusion;
        /* stroke: ${ variables.colors.highlight }; */
    }
`;