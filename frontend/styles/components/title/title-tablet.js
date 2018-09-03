import css from 'styled-jsx/css';
import variables from '../../var';

export default css`
    span {
        width: 100%;
        text-align: center;
        top: calc( 50% - 22.5px );
        height: 45px;
        font-size: ${ variables.font.title.medium };
    }
`