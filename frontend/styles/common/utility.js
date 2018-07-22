import css from 'styled-jsx/css';
import variables from '../var';

export default css`
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

    /* FONT CLASSES */

    .spectral {
        font-family: 'Spectral';
        font-weight: 600;
    }
`;