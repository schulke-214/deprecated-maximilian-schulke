import css from 'styled-jsx/css';
// import variables from '../var';

export default css`
    div {
        position: absolute;
        top: calc( 50vh - 270px);
        left: calc( 50vw - 160px );
        width: 320px;
        height: 540px;
        background-color: salmon;
        overflow: hidden;
    }

    img {
        display: block;
        height: 540px;

        width: 320px;
        
        object-fit: cover;

        position: absolute;
        top: 0;
        left: 0;
    }
`;