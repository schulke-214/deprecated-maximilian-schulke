import css from 'styled-jsx/css';
import variables from '../../var';

export default css`
    #container {
        width: 100%;
        top: calc( 50% - 30px );
        height: 60px;
    }

    .title-parent {
        font-size: ${ variables.font.title.medium };
    }
`