import css from 'styled-jsx/css';
import variables from '../styles/var';

export default css`
    #layout-layer {
        display: block;

        /* SINCE THE VARIABLE IS A STRING, THIS IS THE ONLY POSSIBLE WAY */
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;

        padding: ${ variables.spacing.layout.marginOut + 'vw' };

/*
        height: calc( 100vh - ${ ( variables.spacing.layout.marginOut * 2 ) + 'vw' });

left: ${variables.spacing.layout.marginOut + 'vw' };
        padding-top: ${variables.spacing.layout.marginOut + 'vw' };
  */      
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
        border: 2px solid ${ variables.colors.highlight };
        border-radius: 100%;
        opacity: 0;
    }

    main {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    #gui-layer {
        width: 100%;
        height: 100%;
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
        left: calc( 25vw - ${ variables.spacing.layout.marginOut + 'vw'});
        white-space: nowrap;
    }

    .git-link {
        position: relative;
        display: block;
        transform-origin: center;
        transform: rotate( -90deg );
        height: 15px;
        width: 50px;
        text-align: center;
        /* left: - Half Width + Half Height */
    }

    @media screen and ( max-width: ${ variables.breakpoints.tablet }px ) {
        #layout-layer {
            padding: 50px;
        }

        .top > span { 
            display: none;
        }
    }

    @media screen and ( max-width:  ${ variables.breakpoints.phone }px ) {
        #layout-layer {
            padding: 37.5px;
        }
    }
`;