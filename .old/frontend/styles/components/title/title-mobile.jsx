import css from 'styled-jsx/css';
import variables from '../../var';

export default css`
	#container {
		z-index: 99;
		height: 45px;
		top: calc(50% - 22.5px);
	}

	.title-parent {
		font-weight: 300;
		font-size: ${variables.font.title.small};
	}
`;
