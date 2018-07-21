import css from 'styled-jsx/css';
import variables from '../var';

export default css`
    #home-wrapper {
        display: block;
        position: fixed;

        /* SINCE THE VARIABLE IS A STRING, THIS IS THE ONLY POSSIBLE WAY */
        width: ${ 100 - ( variables.spacing.layout.marginOut * 2 ) + 'vw' };
        height: calc( 100vh - ${ ( variables.spacing.layout.marginOut * 2 ) + 'vw' });
        
        top: ${variables.spacing.layout.marginOut + 'vw' };
        left: ${variables.spacing.layout.marginOut + 'vw' };
    }

    @media screen and ( max-width: ${ variables.breakpoints.tablet }px ) {
        #home-wrapper {
            width: calc( 100vw - 100px );
            height: calc( 100vh - 100px );

            top: 50px;
            left: 50px;
        }
    }
`;