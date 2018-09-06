import css from 'styled-jsx/css';
import variables from '../../var';

export default css`
    #container {
        width: 100%;
        top: calc( 50% - 20px );
        height: 40px;
    }

    .title {
        top: -100%;
        font-size: ${ variables.font.title.medium };
    }

    .title:last-child {
        order: -1
    }
`