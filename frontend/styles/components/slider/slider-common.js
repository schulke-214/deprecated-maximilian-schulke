import css from 'styled-jsx/css';

export default css`
    div {
        z-index: -1;
        overflow: hidden;
    }

    img {
        display: block;
        height: 100%;
        width: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
    }
`;