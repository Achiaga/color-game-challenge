const vistiUrl = () => {
	cy.visit('http://localhost:3000');
};

const getTile = () => {
	return cy.dataQa('tile');
};
const getHearts = () => {
	return cy.dataQa('heart-icon');
};

const getLeaderboard = () => {
	return cy.dataQa('leaderboard');
};

const isDifferent = (tilesColors, candidateColor) => {
	const similarTiles = tilesColors.filter(
		(tileColor) => tileColor === candidateColor
	);
	return similarTiles.length > 1 ? false : true;
};

const getPositionOfLuckyTile = (listColors) => {
	return listColors.findIndex((color) => isDifferent(listColors, color));
};

const chooseLuckyTile = () => {
	let colors = [];
	getTile()
		.each(($el) => {
			const tileColor = window.getComputedStyle($el[0]).backgroundColor;
			colors.push(tileColor);
		})
		.then(() => {
			const luckyTilePos = getPositionOfLuckyTile(colors);
			getTile().eq(luckyTilePos).click();
		});
};

const playGame = (rounds) => {
	for (let i = 0; i < rounds; i++) {
		chooseLuckyTile();
		cy.wait(500);
	}
};

const looseGame = () => {
	chooseWrongTile();
	chooseWrongTile();
	chooseWrongTile();
};

const chooseWrongTile = () => {
	let colors = [];
	getTile()
		.each(($el) => {
			const tileColor = window.getComputedStyle($el[0]).backgroundColor;
			colors.push(tileColor);
		})
		.then(() => {
			const luckyTilePos = getPositionOfLuckyTile(colors);
			getTile()
				.eq(luckyTilePos + 1)
				.click();
		});
};

describe('Play Game', () => {
	beforeEach(() => {
		vistiUrl();
	});

	it('should pass to the next round', () => {
		playGame(4);
		looseGame();
	});
});

describe('Fail tile Game', () => {
	beforeEach(() => {
		vistiUrl();
	});

	it('should lose a heart when failed lucky tile', () => {
		getHearts().should('have.length', 3);
		chooseWrongTile();
		getHearts().should('have.length', 2);
	});
});
describe('Gameover', () => {
	beforeEach(() => {
		vistiUrl();
	});

	it('should leaderboard appear when gameover', () => {
		looseGame();
		getLeaderboard().should.exist;
	});
});
