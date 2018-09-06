import css from 'styled-jsx/css';
import variables from '../../var';

export default css`
    #container {
        width: 100%;
        top: calc( 50% - 17.5px );
    };

    .title {
        height: 35px;
        font-weight: 300;
        font-size: ${ variables.font.title.small };
    }
`;