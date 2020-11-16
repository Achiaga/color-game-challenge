import { useState, useEffect } from 'react';
import { MAX_TIME } from '../../../constants/index';
import Progress from './progress';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Timer = ({ statusGame, setStatusGame, handleFail }) => {
	const [started, setStarted] = useState(false);
	const [secs, setSecs] = useState(MAX_TIME);
	const [timer, setTimer] = useState(null);

	const restart = () => {
		setSecs(MAX_TIME);
	};

	useEffect(() => {
		if (statusGame === 'success') {
			restart();
			setStatusGame('newRound');
		}
		if (statusGame === 'gameover') {
			clearInterval(timer);
			setStarted(false);
		}
	}, [statusGame]);

	useEffect(() => {
		startTimer();
	}, []);

	const countdown = () => {
		setSecs((secs) => secs - 1);
	};

	useEffect(() => {
		if (secs < 0) {
			restart();
			handleFail();
		}
	}, [secs]);

	const startTimer = () => {
		if (!started) {
			setTimer(setInterval(countdown, 1000));
			setStarted(true);
		} else {
			clearInterval(timer);
			setStarted(false);
		}
	};

	return (
		<Wrapper>
			<Progress done={secs} statusGame={statusGame} />
		</Wrapper>
	);
};

export default Timer;
