import css from 'styled-jsx/css';
import variables from '../../var';

export default css`
	.inner {
		position: relative;
		top: calc(50% - 25vh);
		left: 0;

		width: 100%;
		height: 50vh;
	}

	.indication {
		position: absolute;
		left: calc(25vw - ${variables.spacing.layout.marginOut}vw);
		width: min-content;
		height: 100%;
		justify-content: space-between;
	}

	.projectNum {
		height: 15px;
		margin-bottom: 5vh;
	}

	#projectTitle {
		position: absolute;
		top: calc(50% - 37.5px);
		left: 50%;

		font-size: 80px;
		height: 75px;
		width: min-content;

		white-space: nowrap;
		text-transform: lowercase;
		transition: all 0.5s ease-in-out;
		transition-property: font-size height top;
	}

	.project-info {
		position: absolute;

		height: 100%;
		width: min-content;

		/* SLIDER + 5% */
		left: 67.5%;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	#home-date-topic {
		display: flex;
		flex-direction: column;

		height: 50px;
		margin-bottom: calc(7.5vh - 50px);
	}

	#home-date-topic > span:first-child {
		margin-bottom: 15px;
	}
`;
