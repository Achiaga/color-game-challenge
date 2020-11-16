import { useState, useEffect } from 'react';
import {
	Wrapper,
	GameoverTitle,
	LeadboardTitle,
	Table,
	RestartButton,
} from './styled-components';

import { DEFAULT_USER_NAME } from '../../../constants/index';
import { KingSvg } from '../../../assets/svg';
import Player from './player';

const fakeData = [
	{ name: 'Bot Adidas', score: 200 },
	{ name: 'Alfonso', score: 24 },
	{ name: 'Bot Nike', score: 1 },
];

const getNewPlayerPos = (rounds, data) => {
	const position = data.findIndex(({ score }) => score < rounds);
	if (position < 0) return data.length;
	return position;
};

const updateLeaderBoard = (data, positionPlayer, rounds) => {
	const newLeadboards = [
		...data.slice(0, positionPlayer),
		{ name: DEFAULT_USER_NAME, score: rounds },
		...data.slice(positionPlayer),
	];
	return newLeadboards.slice(0, 10);
};

const updateUserInLeaderboard = (leaderBoard, userName) => {
	return leaderBoard.reduce((acc, userData) => {
		if (userData.name === DEFAULT_USER_NAME) {
			return [...acc, { ...userData, name: userName }];
		}
		return [...acc, userData];
	}, []);
};

const populateData = () => {
	return JSON.parse(window.localStorage.getItem('leaderBoard')) || fakeData;
};

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
		<Wrapper>
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
