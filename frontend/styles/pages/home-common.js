import css from 'styled-jsx/css';
import variables from '../var';

export default css`
    #home-wrapper {
        display: block;
        position: fixed;

        /* SINCE THE VARIABLE IS A STRING, THIS IS THE ONLY POSSIBLE WAY */
        width: 100vw;
        height: 100%;

        padding: ${variables.spacing.layout.marginOut + 'vw'};
        
        /*
        top: ${variables.spacing.layout.marginOut + 'vw' };
        left: ${variables.spacing.layout.marginOut + 'vw' };

        */
    }

    @media screen and ( max-width: ${ variables.breakpoints.tablet }px ) {
        #home-wrapper {
            padding: 50px;
        }
    }

    @media screen and ( max-width:  ${ variables.breakpoints.phone }px ) {
        #home-wrapper {
            padding: 37.5px;
        }
    }
`;