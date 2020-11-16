const getMathRandom = (max = 1, min = 0) =>
	Math.round(Math.random() * (max - min) + min);

const generateRandomRGBColor = () => getMathRandom(357);

const boardSize = [4, 9, 16];

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

const getHSLColorStr = (rgb, sat = 50, lum = 50) => {
	return `hsl(${rgb}, ${sat}%, ${lum}%)`;
};

function getBaseLog(x, y) {
	return Math.log(y) / Math.log(x);
}

const getTop = (rounds) => {
	return Math.max(Math.round(100 - (getBaseLog(35, rounds + 1) / 2) * 100), 53);
};

const getBottom = (rounds) => {
	return Math.min(Math.round((getBaseLog(35, rounds + 1) / 2) * 100), 47);
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
export const populatedTilesColors = (luckNumber, tilesColors, rounds) => {
	const boardRGB = generateRandomRGBColor();
	return tilesColors.map((_, index) => {
		const isLuckyTile = isLuckyNumber(index, luckNumber);
		return getTileColor(boardRGB, isLuckyTile, rounds);
	});
};

const generateTiles = (numberOfTiles) => new Array(numberOfTiles).fill('');

export const getTilesColors = (luckyTile, rounds) => {
	return populatedTilesColors(
		luckyTile,
		generateTiles(getBoardSize(rounds)),
		rounds
	);
};
