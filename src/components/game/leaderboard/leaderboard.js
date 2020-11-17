import { useState, useEffect } from 'react';
import {
	Wrapper,
	GameoverTitle,
	LeadboardTitle,
	Table,
	RestartButton,
} from './styled-components';

import { KingSvg } from '../../../assets/svg';
import Player from './player';
import {
	getNewPlayerPos,
	updateUserInLeaderboard,
	populateData,
	updateLeaderBoard,
} from './utils';

const Leaderboard = ({ rounds, handleRestart }) => {
	const [stateData, setData] = useState(populateData());

	const handleUpdateLeaderBoard = (name) => {
		let playerName = name;
		if (playerName.length <= 0) playerName = 'Anonymous';
		window.localStorage.setItem(
			'leaderBoard',
			JSON.stringify(updateUserInLeaderboard(stateData, playerName))
		);
	};

	useEffect(() => {
		setData((data) =>
			updateLeaderBoard(data, getNewPlayerPos(rounds, stateData), rounds)
		);
	}, []);

	return (
		<Wrapper data-qa='leaderboard'>
			<GameoverTitle>
				<h1>GAME OVER</h1>
			</GameoverTitle>
			<LeadboardTitle>
				<KingSvg />
				<h1>Leaderboard</h1>
			</LeadboardTitle>
			<Table>
				{stateData.map(({ name, score }, index) => {
					return (
						<Player
							key={index}
							index={index}
							score={score}
							name={name}
							maxScore={stateData[0].score}
							handleUpdateLeaderBoard={handleUpdateLeaderBoard}
						/>
					);
				})}
			</Table>
			<RestartButton onClick={handleRestart}>Play Again</RestartButton>
		</Wrapper>
	);
};
export default Leaderboard;
