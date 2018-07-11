import css from 'styled-jsx/css';
import variables from '../var';

export default css`
    /* FONT IMPORTS */
    @import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Noto Sans', 'Helvetica', 'Montserrat', 'Arial';
        font-weight: 400;
        outline: none;

        color: ${ variables.colors.highlight };
        
        font-smoothing: antialiased;
        tap-highlight-color: rgba(0,0,0,0);
        -webkit-font-smoothing: antialiased;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    } 

    html, body {
        background-color: ${ variables.colors.main };
    }

    /* HIDE SCROLLBAR */
    html::-webkit-scrollbar {
        width: 0px;
    }

    html::-webkit-scrollbar-thumb {
        background-color: rgba(255,255,255,0);
    }
`