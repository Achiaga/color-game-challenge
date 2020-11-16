# FrontEnd Assignment

> A fun game about finding the different color.

Created a web-application using React as presented below.

## 💻 Built with

- [Reactjs](https://reactjs.org/)
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) (ES6+)
- [Styled-componetns](https://styled-components.com/): enhance CSS for styling React component systems
- [React Testing Library](https://testing-library.com/): for unit-testing
- [Cypress](https://www.cypress.io/): for e2e testing

## 🛠️ Installation Steps

1. Clone the repository

```bash
git clone https://github.com/Achiaga/color-game-challenge.git
```

2. Change the working directory

```bash
cd color-game-challenge/
```

3. Install dependencies

```bash
yarn install
```

4. Run the app

```bash
yarn start
```

🌟 You are all set!

## 🧪 Run Tests

(After installing the repository)

1. Run test

```bash
yarn test
```

## 🧪 Run Script for Winning

This script will infinitely win the game.

1. Write script in the console of the web

```js
const selectLuckyTile = () => {
	const isDifferent = (arr, elm) => {
		const similarTiles = arr.filter((arrEl) => arrEl === elm);
		return similarTiles.length > 1 ? false : true;
	};

	const getTilesColors = (tiles) => {
		return [...tiles].reduce((acc, tile) => {
			return [...acc, window.getComputedStyle(tile).backgroundColor];
		}, []);
	};

	const getPositionOfLuckyTile = (listColors) => {
		return listColors.findIndex((color) => isDifferent(listColors, color));
	};

	const chooseLuckyTile = (luckyTile) => {
		return luckyTile.click();
	};
	const gameBoard = document.getElementById('game-board');
	const tiles = gameBoard.getElementsByTagName('div');
	const listColors = getTilesColors(tiles);
	const luckyTilePos = getPositionOfLuckyTile(listColors);
	chooseLuckyTile(tiles[luckyTilePos]);
};
const playGame = () => {
	selectLuckyTile();
	setTimeout(function () {
		playGame();
	}, 1000);
};
```

2. Minify version of the script

```js
const selectLuckyTile = () => {
		const e = document.getElementById('game-board').getElementsByTagName('div');
		((e) => e.click())(
			e[
				((e) =>
					e.findIndex((t) =>
						((e, t) => !(e.filter((e) => e === t).length > 1))(e, t)
					))(
					((e) =>
						[...e].reduce(
							(e, t) => [...e, window.getComputedStyle(t).backgroundColor],
							[]
						))(e)
				)
			]
		);
	},
	playGame = () => {
		selectLuckyTile(),
			setTimeout(function () {
				playGame();
			}, 1e3);
	};
```

3. Initialize script

```js
playGame();
```

4. Stop script

```js
stopGame();
```
