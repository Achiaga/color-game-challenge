import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getTilesColors, chooseLuckyTile } from './helpers';

import GameBoard from './gameboard';
import SettingsGame from './settings-game';
import Countdown from './countdown';

const GameBoardWrapper = styled.div`
	padding: 1em 4em;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Game = () => {
	const [rounds, setRounds] = useState(0);
	const [tilesColors, setTiltesColors] = useState([]);
	const [luckyTile, setLuckyTile] = useState();
	const [lives, setLives] = useState(2);

	useEffect(() => {
		const luckyTile = chooseLuckyTile(rounds);
		setLuckyTile(luckyTile);
		setTiltesColors(getTilesColors(luckyTile, rounds));
	}, []);

	const goToNextLevel = () => {
		const newRound = rounds + 1;
		const luckyTileNow = chooseLuckyTile(newRound);
		setRounds(newRound);
		setLuckyTile(luckyTileNow);
		setTiltesColors(getTilesColors(luckyTileNow, newRound));
	};

	const handleFail = () => {
		if (lives < 1) console.log('gameover');
		setLives((lives) => lives - 1);
	};

	const handleSuccess = () => {
		return goToNextLevel();
	};

	return (
		<>
			<SettingsGame rounds={rounds} />
			{/* <Countdown /> */}
			<GameBoardWrapper>
				<GameBoard
					tilesColors={tilesColors}
					handleSuccess={handleSuccess}
					handleFail={handleFail}
					luckyTile={luckyTile}
				/>
			</GameBoardWrapper>
		</>
	);
};
export default Game;
