import css from 'styled-jsx/css';
import variables from '../var';

export default css`
	#mouse-cursor {
		z-index: 1000;
		display: block;
		width: ${variables.cursor.width}px;
		height: ${variables.cursor.height}px;
		border: 1px solid ${variables.colors.highlight};
		transform-origin: center;
		border-radius: 100%;
		opacity: 0;
	}
`;
