import css from 'styled-jsx/css';
import variables from '../var';

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

    #gui-layer {
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 500;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    #gui-layer > div{
        display: flex;
        position: relative;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        height: min-content;
    }

    #gui-wrapper-top {
        height: 25px;
    }

    #gui-wrapper-top > span {
        position: absolute;
        /* OFFSET BY LAYOUT WIDTH / 4 */
        left: calc(${ 100 - ( variables.spacing.layout.marginOut * 2 ) + 'vw' } / 4 );
        white-space: nowrap;
    }

    #gui-wrapper-mid > a {
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
    }

    @media screen and ( max-width:  ${ variables.breakpoints.phone }px ) {
        #layout-layer {
            width: calc( 100vw - 50px );
            height: calc( 100vh - 50px );
    
            top: 25px;
            left: 25px;
        }
    }
`;