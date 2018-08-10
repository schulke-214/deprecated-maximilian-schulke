import css from 'styled-jsx/css';
import variables from '../styles/var';

export default css`
    #layout-layer {
        display: block;
        position: fixed;
        /* SINCE THE VARIABLE IS A STRING, THIS IS THE ONLY POSSIBLE WAY */
        width: ${ 100 - ( variables.spacing.layout.marginOut * 2 ) + 'vw' };
        height: calc( 100vh - ${ ( variables.spacing.layout.marginOut * 2 ) + 'vw' });

        top: ${variables.spacing.layout.marginOut + 'vw' };
        left: ${variables.spacing.layout.marginOut + 'vw' };

        z-index: 1000;
    }
    
    #mouse-layer {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 499;
    }
    
    #mouse-cursor {
        display: block;
        width: 25px;
        height: 25px;
        border-radius: 100%;
        opacity: 0;
        border: 2px solid ${ variables.colors.highlight };
    }

    #gui-layer {
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        z-index: 500;
    }

    #gui-layer > div{
        display: flex;
        position: relative;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        height: min-content;
    }

    .top {
        height: 25px;
    }

    .top > span {
        position: absolute;
        /* OFFSET BY LAYOUT WIDTH / 4 */
        left: calc( 25vw - ${ variables.spacing.layout.marginOut }vw );
        
        /* 
        calc(${ 100 - ( variables.spacing.layout.marginOut * 2 ) + 'vw' } / 4 );
        */
        white-space: nowrap;
    }

    .mid > a {
        position: relative;
        display: block;
        transform-origin: center;
        transform: rotate( -90deg );
        heigth: 15px;
        width: 50px;
        text-align: center;
        /* - Half Width + Half Height */
        left: ${-25 + 7.5}px;
    }

    @media screen and ( max-width: ${ variables.breakpoints.tablet }px ) {
        #layout-layer {
            width: calc( 100vw - 100px );
            height: calc( 100vh - 100px );
    
            top: 50px;
            left: 50px;
        }

        .top > span { 
            display: none;
        }
    }

    @media screen and ( max-width:  ${ variables.breakpoints.phone }px ) {
        #layout-layer {
            width: calc( 100vw - 75px );
            height: calc( 100vh - 75px );
    
            top: 37.5px;
            left: 37.5px;
        }
    }
`;