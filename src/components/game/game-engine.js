const RGB_HUE_LENGHT = 352;
const HSL_SAT_DEFAULT = 50;
const HSL_LIGHT_DEFAULT = 50;

const MAX_LUM_SAT = 100;
const LIMIT_TOP_LUM_SAT = 55;
const LIMIT_BOTTOM_LUM_SAT = 46;

const EXPONENTIAL_DIFFICULTY_MAX_ROUND = 35;

const boardSize = [4, 9, 16];

// Export for testing
export const getMathRandom = (max = 1, min = 0) =>
	Math.round(Math.random() * (max - min) + min);

const getBoardSize = (round) => {
	if (round > 2) return 16;
	return boardSize[round];
};

const randomizeSatLum = (random1, random2) => {
	if (getMathRandom()) return random1;
	return random2;
};

export const chooseLuckyTile = (round) => {
	return getMathRandom(getBoardSize(round) - 1);
};

const getHSLColorStr = (
	rgb,
	sat = HSL_SAT_DEFAULT,
	lum = HSL_LIGHT_DEFAULT
) => {
	return `hsl(${rgb}, ${sat}%, ${lum}%)`;
};

function getBaseLog(x, y) {
	return Math.log(y) / Math.log(x);
}

const getRoundComplexity = (rounds) =>
	getBaseLog(EXPONENTIAL_DIFFICULTY_MAX_ROUND, rounds + 1) / 2;

const getTop = (rounds) => {
	return Math.max(
		Math.round(MAX_LUM_SAT - getRoundComplexity(rounds) * 100),
		LIMIT_TOP_LUM_SAT
	);
};

const getBottom = (rounds) => {
	return Math.min(
		Math.round(getRoundComplexity(rounds) * 100),
		LIMIT_BOTTOM_LUM_SAT
	);
};

const getSatLum = (rounds) => {
	return randomizeSatLum(getTop(rounds), getBottom(rounds));
};

const getTileColor = (rgb, isLuckyTile, rounds) => {
	if (isLuckyTile) {
		return getHSLColorStr(rgb, getSatLum(rounds), getSatLum(rounds));
	}
	return getHSLColorStr(rgb);
};

const isLuckyNumber = (index, luckyNumber) => index === luckyNumber;

// Export for testing
export const populatedTilesColors = (
	luckNumber,
	emptyTiles,
	tilesColors,
	rounds
) => {
	return emptyTiles.map((_, index) => {
		const isLuckyTile = isLuckyNumber(index, luckNumber);
		return getTileColor(tilesColors, isLuckyTile, rounds);
	});
};

const generateTiles = (numberOfTiles) => new Array(numberOfTiles).fill('');

export const getTilesColors = (luckyTile, rounds) => {
	return populatedTilesColors(
		luckyTile,
		generateTiles(getBoardSize(rounds)),
		getMathRandom(RGB_HUE_LENGHT),
		rounds
	);
};
