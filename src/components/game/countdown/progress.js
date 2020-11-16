import React from 'react';
import { MAX_TIME } from '../../../constants/index';
import styled from 'styled-components';

const ProgressBar = styled.div`
	background-color: #d8d8d8;
	border-radius: 8px;
	position: relative;
	margin: 15px 0;
	height: 10px;
	width: 50%;
	@media only screen and (max-width: 550px) {
		width: 75%;
	}
`;

const ProgressDone = styled.div`
	background: linear-gradient(to left, #00a6ff, #5bff77);
	box-shadow: 0 2px 5px -1px rgba(50, 50, 93, 0.25),
		0 1px 3px -1px rgba(0, 0, 0, 0.3);
	border-radius: 8px;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 0;
	opacity: 1;
`;

const getWidth = (done, statusGame) => {
	if (statusGame === 'gameover') return done * 10;
	if (done === MAX_TIME) return 100;
	return 0;
};

const Progress = ({ done, statusGame }) => {
	return (
		<ProgressBar>
			<ProgressDone
				style={{
					width: `${getWidth(done, statusGame)}%`,
					transition: `width ${done === MAX_TIME ? 0.1 : MAX_TIME}s linear`,
				}}
			/>
		</ProgressBar>
	);
};

export default Progress;
