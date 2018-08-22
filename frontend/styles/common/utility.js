import css from 'styled-jsx/css';
import variables from '../var';

export default css`
    
    /* POSITION CLASSES */
    .block {
        display: block;
    }

    .relative {
        position: relative;
    }

    /* FLEXBOX CLASSES */
    .flex {
        display: flex;
    }

    .row {
        flex-direction: row;
    }

    .column {
        flex-direction: column;
    }

    .center {
        align-items: center;
        justify-content: center;
    } 
    
    .space-around {
        justify-content: space-around;
    }

    .space-between {
        justify-content: space-between;
    }

    /* FONT CLASSES */

    .spectral {
        font-family: 'Spectral';
        font-weight: 600;
    }
`;