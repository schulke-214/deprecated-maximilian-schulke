import css from 'styled-jsx/css';
import variables from '../../var';

export default css`
    #container {
        width: 50%;
        left: 50%;
        height: 80px;
        top: calc( 50% - 40px );
    }

    .title-parent {
        font-size: ${ variables.font.title.huge };
        justify-content: flex-start;
    }
`;