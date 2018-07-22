import css from 'styled-jsx/css';
import variables from '../var';

export default css`
    #home-inner {
        position: absolute;
        top: calc( 50% - 25vh );

        width: 100%;
        height: 50vh;
    }

    #home-display {
        width: min-content;
        height: 100%;  
        position: absolute;

        /* OFFSET BY LAYOUT WIDTH / 4 */
        left: calc( 25vw - ${ variables.spacing.layout.marginOut }vw );

        /*
        calc(${ 100 - ( variables.spacing.layout.marginOut * 2 ) + 'vw' } / 4 );
        
        */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    #home-view-project {
        height: 15px;
        margin-bottom: calc( 7.5vh - 15px );
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
        width: min-content;
        position: absolute;

        /* OFFSET BY LAYOUT WIDTH / 4 */
        /*left: calc( 50% + 12.5% + 5%);*/
        left: 67.5%;
        
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    #home-date-topic {
        height: 50px;
        margin-bottom: calc( 7.5vh - 50px );

        display: flex;
        flex-direction: column;
    }

    #home-date-topic > span:first-child {
        margin-bottom: 15px;
    }
`;