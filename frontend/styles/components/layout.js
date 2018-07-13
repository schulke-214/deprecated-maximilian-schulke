import css from 'styled-jsx/css';
import variables from '../var';

export default css`
    #layout-layer {
        display: block;
        position: fixed;
        /* SINCE THE VARIABLE IS A STRING, THIS IS THE ONLY POSSIBLE WAY */
        width: ${ 100 - ( variables.spacing.layout.marginOut * 2 ) + 'vw' };
        height: calc( 100vh - ${ ( variables.spacing.layout.marginOut * 2 ) + 'vw' });

        top: ${variables.spacing.layout.marginOut + 'vw' };
        left: ${variables.spacing.layout.marginOut + 'vw' };
        background-color: red;
    }

    
`;