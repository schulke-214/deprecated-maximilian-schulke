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
        height: 100%;  
        position: absolute;

        /* OFFSET BY LAYOUT WIDTH / 4 */
        left: calc(${ 100 - ( variables.spacing.layout.marginOut * 2 ) + 'vw' } / 4 );
        
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    #home-view-project {
        position: absolute;
        top: calc( 100% - 75px);
    }


    #projectTitle {
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
        transition: all 0.5s ease-in-out;
        transition-property: font-size height top;
    }

    #home-project-info {
        height: 100%;  
        position: absolute;

        /* OFFSET BY LAYOUT WIDTH / 4 */
        left: calc( 50% + 12.5% + 5%);
        
        /*display: flex;
        flex-direction: column;
        justify-content: space-between;*/
    }

    #home-date-topic {
        position: absolute;
        top: calc( 100% - 75px);
        display: flex;
        flex-direction: column;
    }

    #home-date-topic > span:first-child {
        margin-bottom: 15px;
    }

    @media screen and ( max-width: ${ variables.breakpoints.desktop }px ) {
        #projectTitle {
            font-size: 60px;
            height: 50px;
            top: calc(50% - 25px);

        }
    }

    @media screen and ( max-width: ${ variables.breakpoints.tablet }px ) {
        #circle {
            display: none;
        }
    
        #home-display {
            height: min-content;
        }

        

    }


`;