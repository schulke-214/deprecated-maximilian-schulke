import css from 'styled-jsx/css';
import variables from '../var';

export default css`
	.arrow-container {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 120px;
	}

	.arrow-box {
		display: block;
		width: 40px;
		height: 40px;
	}

	.path {
		fill: none;
		stroke-width: 2;
		stroke: ${variables.colors.highlight};
	}

	.trigger {
		position: absolute;
		width: calc(100% + 50px);
		height: calc(100% + 50px);
		left: -25px;
		top: -25px;
		border: 1px solid green;
		z-index: -100;
	}
`;
