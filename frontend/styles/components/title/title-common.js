import css from 'styled-jsx/css';

export default css`
    #container {
        position: absolute;
        overflow: hidden;
        width: 100%;
    }

    .title-parent {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;

        text-align: center;
        font-weight: 400;
        font-family: "Spectral";
        height: inherit;
        width: 100%;
    }

    .title-parent > span {
        font-size: inherit;
    } 
`;