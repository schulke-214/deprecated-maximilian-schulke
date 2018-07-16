import css from 'styled-jsx/css';
import variables from '../var';

// IMPORTS FROM OTHER CSS STRINGS

export default css`
    /* FONT IMPORTS */
    @import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700');
    @import url('https://fonts.googleapis.com/css?family=Spectral:400,600');

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

    body {
        height: 100vh;
        width: 100vw;
        overflow: hidden;
    }

    h1, h2, h3, h4, h5, h6, a, p, span, div {
        user-select: none;
        font-size: ${ variables.font.sizes.medium };
        line-height: 80%;
        font-weight: 400;
        text-decoration: none;
    }

    a {
        text-transform: lowercase;
    }

    /* LOGO CLASSES */
    
    .logo {
        width: 20px;
        height: 10px;
    }

    .logo-pageloader {
        width: 25px;
        height: 25px;
        position: absolute;
        top: 50px;
        left: 50px;
    }

    img {
        object-fit: cover;
        display: block;
    }

    /* HIDE SCROLLBAR */
    html::-webkit-scrollbar {
        width: 0px;
    }

    html::-webkit-scrollbar-thumb {
        background-color: rgba(255,255,255,0);
    }


`