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
		top: 25vh;
	}

	#visit-project {
		position: absolute;
		top: 0;
		font-weight: 700;
	}

	ul {
		display: flex;
		list-style: none;
		width: 25vw;
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
		font-weight: 300;
		margin-bottom: 10px;
	}
`;
