import css from 'styled-jsx/css';
import variables from '../var';

export default css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Lato', 'Noto Sans', 'Helvetica', 'Montserrat', 'Arial';
        font-weight: 400;
        outline: none;

        color: ${ variables.colors.highlight };
        
        font-smoothing: antialiased;
        tap-highlight-color: rgba(0,0,0,0);
        -webkit-font-smoothing: antialiased;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    } 

    html {
        overflow-y: -ms-autohiding-scrollbar;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;  
    }

    ::-webkit-scrollbar {
        display: none;  
    }

    html, body {
        background-color: ${ variables.colors.main };
    }

    body {
        position: fixed;
        top: 0px;
        left: 0px;
        overflow: hidden;
    }

    h1, h2, h3, h4, h5, h6, a, p, span, div {
        user-select: none;
        font-size: ${ variables.font.text.medium };
        line-height: 80%;
        font-weight: 400;
        text-decoration: none;
    }

    a {
        text-transform: lowercase;
        white-space: nowrap;
    }

    span {
        white-space: nowrap;
    }

    /* HANDLING MOUSE EVENTS */
    .clickable {
        pointer-events: all;
    }

    .unclickable {
        pointer-events: none;
    }

    /* LOGO CLASSES */
    .logo {
        width: 20px;
        height: 10px;
    }

    img {
        object-fit: cover;
        display: block;
    }
    
    /* CLASSES FOR SPAN ANIMATION */
    .hover-link-span {
        display: inline-block;
        font-weight: inherit;
    }
    
    .hover-link-space {
        width: 5px
    }

    .black-arrow polyline {
        transition: all .25s ease-in-out; 
        stroke: ${ variables.colors.main }!important;
    }
    
    /* HIDE SCROLLBAR */
    html::-webkit-scrollbar {
        width: 0px;
    }

    html::-webkit-scrollbar-thumb {
        background-color: rgba(255,255,255,0);
    }
`