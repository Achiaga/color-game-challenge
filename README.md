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
	const isDifferent = (tilesColors, candidateTile) => {
		const similarTiles = tilesColors.filter(
			(tileColor) => tileColor === candidateTile
		);
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

const getNumberOfLivesLeft = () => {
	return (
		document.getElementById('hearts-lives').getElementsByTagName('svg').length >
		0
	);
};
const playGame = () => {
	selectLuckyTile();
	if (!getNumberOfLivesLeft()) return;
	setTimeout(function () {
		playGame();
	}, 1000);
};

window.addEventListener('keydown', (e) => {
	if (e.keyCode === 32) {
		playGame();
	}
});
console.log(` 
#############################
#############################
############################# 
PRESS SPACE TO START THE GAME `);
```

2. Babel parse to make it compatiable with all browrsers

```js
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var selectLuckyTile = function selectLuckyTile() {
  var isDifferent = function isDifferent(tilesColors, candidateTile) {
    var similarTiles = tilesColors.filter(function (tileColor) {
      return tileColor === candidateTile;
    });
    return similarTiles.length > 1 ? false : true;
  };

  var getTilesColors = function getTilesColors(tiles) {
    return _toConsumableArray(tiles).reduce(function (acc, tile) {
      return [].concat(_toConsumableArray(acc), [window.getComputedStyle(tile).backgroundColor]);
    }, []);
  };

  var getPositionOfLuckyTile = function getPositionOfLuckyTile(listColors) {
    return listColors.findIndex(function (color) {
      return isDifferent(listColors, color);
    });
  };

  var chooseLuckyTile = function chooseLuckyTile(luckyTile) {
    return luckyTile.click();
  };

  var gameBoard = document.getElementById('game-board');
  var tiles = gameBoard.getElementsByTagName('div');
  var listColors = getTilesColors(tiles);
  var luckyTilePos = getPositionOfLuckyTile(listColors);
  chooseLuckyTile(tiles[luckyTilePos]);
};

var getNumberOfLivesLeft = function getNumberOfLivesLeft() {
  return document.getElementById('hearts-lives').getElementsByTagName('svg').length > 0;
};

var playGame = function playGame() {
  selectLuckyTile();
  if (!getNumberOfLivesLeft()) return;
  setTimeout(function () {
    playGame();
  }, 1000);
};

window.addEventListener('keydown', function (e) {
  if (e.keyCode === 32) {
    playGame();
  }
});
console.log(" \n#############################\n#############################\n############################# \nPRESS SPACE TO START THE GAME ");
```

2. Minify and uglify version of the script

```js
"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,r){if(e){if("string"==typeof e)return _arrayLikeToArray(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,r):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var selectLuckyTile=function(){var e=document.getElementById("game-board").getElementsByTagName("div"),r=function(e){return e.findIndex(function(r){return t=r,!(e.filter(function(e){return e===t}).length>1);var t})}(function(e){return _toConsumableArray(e).reduce(function(e,r){return[].concat(_toConsumableArray(e),[window.getComputedStyle(r).backgroundColor])},[])}(e));e[r].click()},getNumberOfLivesLeft=function(){return document.getElementById("hearts-lives").getElementsByTagName("svg").length>0},playGame=function e(){selectLuckyTile(),getNumberOfLivesLeft()&&setTimeout(function(){e()},1e3)};window.addEventListener("keydown",function(e){32===e.keyCode&&playGame()}),console.log(" \n#############################\n#############################\n############################# \nPRESS SPACE TO START THE GAME ");
```

3. Initialize script

Copy the script on the console and press enter

To start the game Press ```space```.

The script will stope once the are no more lives left

