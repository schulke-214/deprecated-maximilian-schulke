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

    #gui-wrapper-mid {
        
    }
`;