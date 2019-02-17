import css from 'styled-jsx/css';

export default css`
	div {
		cursor: pointer;
		position: relative;
		z-index: -10;
		overflow: hidden;
	}

	canvas {
		transform-origin: center;
		position: absolute;
	}
`;
