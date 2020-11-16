import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getTilesColors, chooseLuckyTile } from './game-engine';
import { INITAL_LIVES } from '../../constants/index';

import GameBoard from './gameboard';
import SettingsGame from './settings-game';
import Countdown from './countdown';
import Modal from '../modal';
import Leaderboard from './leaderboard';

const GameBoardWrapper = styled.div`
	padding: 1em;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Game = () => {
	const [rounds, setRounds] = useState(0);
	const [tilesColors, setTiltesColors] = useState([]);
	const [luckyTile, setLuckyTile] = useState();
	const [lives, setLives] = useState(INITAL_LIVES);
	const [statusGame, setStatusGame] = useState('newRound');

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
		const updatedLives = lives - 1;
		setLives(updatedLives);
		if (!updatedLives) setStatusGame('gameover');
	};

	const handleSuccess = () => {
		setStatusGame('success');
		return goToNextLevel();
	};

	const handleRestart = () => {
		setLives(INITAL_LIVES);
		setRounds(0);
		const luckyTileNow = chooseLuckyTile(0);
		setLuckyTile(luckyTileNow);
		setTiltesColors(getTilesColors(luckyTileNow, 0));
	};

	return (
		<>
			<SettingsGame rounds={rounds} lives={lives} />
			<Countdown
				statusGame={statusGame}
				setStatusGame={setStatusGame}
				handleFail={handleFail}
			/>
			{!lives && (
				<Modal>
					<Leaderboard rounds={rounds} handleRestart={handleRestart} />
				</Modal>
			)}
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
