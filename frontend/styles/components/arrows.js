import css from "styled-jsx/css";
import variables from '../var';

export default css`
    .arrow-container {
        display: flex;
        flex-direction column;
        justify-content: space-between;
        height: 120px;
    }
    
    .arrow-box {
        display: block;
        width: 40px;
        height: 40px;
    }
    
    .path {
        fill: none;
        stroke-width: 2;
        stroke: ${ variables.colors.highlight };
    }
`;