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

    #home-inner {
        position: absolute;
        top: calc( 50% - 25vh );

        width: 100%;
        height: 50vh;
    }

    #home-display {
        width: 200px;
        height: 100%;  
        position: absolute;

        /* OFFSET BY LAYOUT WIDTH / 4 */
        left: calc(${ 100 - ( variables.spacing.layout.marginOut * 2 ) + 'vw' } / 4 );
        
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }


    #projecttitle {
        position: absolute;
        top: calc(50% - 37.5px);
        left: 50%;
        font-family: 'Spectral';
        font-weight: 600;
        font-size: 80px;
        white-space: nowrap;
        height: 75px;
        width: min-content;
        text-transform: lowercase;
    }

    #home-project-info {
        width: 200px;
        height: 100%;  
        position: absolute;

        /* OFFSET BY LAYOUT WIDTH / 4 */
        left: calc( 50% + 12.5% + 5%);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }



`;