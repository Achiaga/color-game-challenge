import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

let timer;

const Component = () => {
	const [countdown, setCountdown] = useState(10);

	useEffect(() => {
		if (countdown <= 0) {
			console.log('END');
			return;
			// return gameOver();
		}
		timer = setInterval(() => {
			setCountdown((countdown) => countdown - 1);
		}, 1000);
	}, [countdown]);

	const handleClick = () => {
		clearInterval(timer);
		setCountdown(10);
	};

	return (
		<div>
			<h1>{countdown}</h1>
			<button onClick={handleClick}>Clear</button>
		</div>
	);
};
export default Component;
