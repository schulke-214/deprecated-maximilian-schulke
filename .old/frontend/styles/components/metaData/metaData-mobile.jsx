import css from 'styled-jsx/css';
import variables from '../../var';

export default css`
	#wrap {
		display: flex;
		justify-content: space-between;
		width: calc(100vw - ${variables.spacing.layout.marginOut + 'vw'});
		top: ${variables.spacing.layout.marginOut + 'vw'};
		left: ${variables.spacing.layout.marginOut + 'vw'};
	}

	#visit-project {
		position: relative;
		left: 0;
		right: 0;
	}

	ul {
		flex-direction: column;
		width: auto;
	}

	li {
		margin-bottom: 25px;
	}

	@media screen and (max-width: ${variables.breakpoints.tablet}px) {
		#wrap {
			top: 50px;
			left: 50px;
			width: calc(100vw - 100px);
		}
	}

	@media screen and (max-width: ${variables.breakpoints.phone}px) {
		#wrap {
			top: 37.5px;
			left: 37.5px;

			width: calc(100vw - 75px);
		}
	}
`;
