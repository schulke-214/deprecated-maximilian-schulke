import css from 'styled-jsx/css';
import variables from '../../var';

export default css`
    #container {
        width: 100%;
        height: 50vh;
        display: block;
        position: relative;
    }

    #wrap {
        position: relative;
        left: 25vw;
        top: 25vh;
    }

    #visit-project {
        position: absolute;
        top: 0;
        left: 25vw;
        font-weight: 700;
    }

    ul {
        display: flex;
        width: 25vw;
        list-style: none;
    }

    ul > li {
        display: flex;
        flex-direction: column;
        margin-right: 50px;
    }

    span:first-child {
        font-weight: 700;
        margin-bottom: 25px;
    }

    span:not(:first-child) {
        margin-bottom: 10px;
    }
`;