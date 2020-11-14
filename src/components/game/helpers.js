const getMathRandom = (max = 1, min = 0) =>
	Math.round(Math.random() * (max - min) + min);

const generateRandomRGBColor = () => getMathRandom(357);

const boardSize = [4, 9, 16];

const getBoardSize = (round) => {
	if (round > 2) return 16;
	return boardSize[round];
};

const getHSLColorStr = (rgb, sat = 50, lum = 50) => {
	return `hsl(${rgb}, ${sat}%, ${lum}%)`;
};

const getTileColor = (rgb, isLuckyTile, rounds) => {
	if (isLuckyTile) {
		return getHSLColorStr(rgb);
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
