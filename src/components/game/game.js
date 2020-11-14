import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getTilesColors } from './helpers';

import GameBoard from './gameboard';

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
		const luckyTile = 1;
		setLuckyTile(luckyTile);
		setTiltesColors(getTilesColors(luckyTile, rounds));
	}, []);

	const goToNextLevel = () => {
		const newRound = rounds + 1;
		const luckyTileNow = 1;
		setRounds(newRound);
		setLuckyTile(luckyTileNow);
		setTiltesColors(getTilesColors(luckyTileNow, newRound));
	};

	const handleSuccess = () => {
		return goToNextLevel();
	};

	return (
		<>
			<GameBoardWrapper>
				<GameBoard
					tilesColors={tilesColors}
					handleSuccess={handleSuccess}
					luckyTile={luckyTile}
				/>
			</GameBoardWrapper>
		</>
	);
};
export default Game;
