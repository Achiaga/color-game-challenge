import { DEFAULT_USER_NAME } from '../../../constants/index';

import { colors } from '../../../constants/index';

export const getColor = (index) => {
	return colors[index] ? colors[index] : '#00000063';
};

export const checkIsUser = (name) => {
	return name === '__{{New Player}}__';
};

export const fakeData = [
	{ name: 'Bot Adidas', score: 100 },
	{ name: 'Alfonso', score: 24 },
	{ name: 'Bot Nike', score: 1 },
];

export const getNewPlayerPos = (rounds, data) => {
	const position = data.findIndex(({ score }) => score < rounds);
	if (position < 0) return data.length;
	return position;
};

export const updateLeaderBoard = (data, positionPlayer, rounds) => {
	const newLeadboards = [
		...data.slice(0, positionPlayer),
		{ name: DEFAULT_USER_NAME, score: rounds },
		...data.slice(positionPlayer),
	];
	return newLeadboards.slice(0, 10);
};

export const updateUserInLeaderboard = (leaderBoard, userName) => {
	return leaderBoard.reduce((acc, userData) => {
		if (userData.name === DEFAULT_USER_NAME) {
			return [...acc, { ...userData, name: userName }];
		}
		return [...acc, userData];
	}, []);
};

export const populateData = () => {
	return JSON.parse(window.localStorage.getItem('leaderBoard')) || fakeData;
};
