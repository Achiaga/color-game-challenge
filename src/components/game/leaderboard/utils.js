import { colors } from '../../../constants/index';

export const getColor = (index) => {
	return colors[index] ? colors[index] : '#00000063';
};

export const checkIsUser = (name) => {
	return name === '__{{New Player}}__';
};
