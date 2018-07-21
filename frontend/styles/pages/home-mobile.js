import css from 'styled-jsx/css';
import variables from '../var';

export default css`
    #home-inner {
        position: relative;
        width: 100%;
        height: 100%;

    }

    #home-wrapper {
        position: absolute;

        display: flex;
        flex-direction: column;

        top: 0;
        left: calc( 50% - 160px );
        width: 320px;
        height: 100%;


    } 

    #home-top {
        flex: 1 1 0;
        
        display: flex;
        align-items: flex-end;
    }

    #home-top > span {
        margin-bottom: 50px;
    }

    #home-lower {
        flex: 1 1 0;

        display: flex;
        justify-content: space-between;
        align-items: flex-start;

    }

    #projectTitle {
        position: absolute;
        top: calc(50% - 25px);
        font-family: 'Spectral';
        font-weight: 600;
        font-size: 60px;
        white-space: nowrap;
        height: 50px;
        width: 100%;
        text-align: center;
        text-transform: lowercase;
        transition: all 0.5s ease-in-out;
        transition-property: font-size height top;
    }

    #home-view-project {
        margin-top: 50px;
    }

    #home-date-topic {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        text-align: right;
        width: min-content;
    }

    #home-date-topic > span:first-child {
        margin-bottom: 15px;
    }
`;