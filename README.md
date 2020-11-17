# FrontEnd Assignment

> A fun game about finding the different color.

Created a web-application using React as presented below.

## 💻 Built with

- [Reactjs](https://reactjs.org/)
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) (ES6+)
- [Styled-componetns](https://styled-components.com/): enhance CSS for styling React component systems
- [React Testing Library](https://testing-library.com/): for unit-testing
- [Cypress](https://www.cypress.io/): for e2e testing

## ⚙️ Game Logic

My first approach for the game logic was to make the difficulty of the color ( saturation and luminosity ) random ( 0-100 ) for generating a different shade of the color but with this approach I realize that this would ruin the spirit of a ```platform game``` ( the longer you play the harder it gets ) arriving to a  high round would depend too much on luck and not skill. 

So the approach I followed is to make the difficulty increase linear so the first rounds would be easy and the higher you get the more difficult it is. Then I realize that it was boring playing so many easy rounds.

So the final approach was to make it logaritmic so I could reduce the number of easy rounds enough to be intuitive for the user to know what to do in order to win but not so much that it is boring. I did this by using a logarithm on the saturation and luminosity of the HSL until it reaches a maximum so the game doesn't become impossible to solve.


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

1. Run unit test

```bash
yarn test
```

2. Run headless cypress tests
```bash
yarn test:cypress:run
```

## 🤖 Run Script for Winning

This script will infinitely win the game.

1. Vanilla JS script

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

2. JS code Babel parsed to make it compatiable with all browrsers

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

Copy the script on the developer tools console and press enter

To start the game Press ```space```.

The script will stop once the are no more lives left.


## 🖥 Cross-browser Compatibility

Since I only have a Mac and iPhone I couldn't test all browsers compatibility since browsers behave differently in each OS. So the solution for this was trying some of the free resources on the internet that allows you to test your page on different browsers on different OS. Although the free trial is a bit limited.

The resource I used is BrowserStack. That gave me this output: https://www.browserstack.com/screenshots/dacc506b4e8aca25743e4f4419fdf5ca953eb8b0

<img width="1040" alt="Captura de pantalla 2020-11-17 a las 10 30 51" src="https://user-images.githubusercontent.com/44972334/99372069-fb9a7380-28bf-11eb-9b2b-d0388afb395d.png">

> I only got two errors, one of them is a time error which doesn't mean an error of compatibility, it seems to be an error of BrowserStack since the device of the error is OS X Catalina firefox 63 that is the one I have and I checked that the page is compatible.

<img width="1028" alt="Captura de pantalla 2020-11-17 a las 9 45 30" src="https://user-images.githubusercontent.com/44972334/99371637-74e59680-28bf-11eb-8309-0a0b140bf1b3.png">

> And the second error is for windows 10 edge 18 where it seems like the settings of the game (rounds and likes) are not center, which means that flexbox isn't working but I could do a quick fix with margin auto on both children. And I also asked a friend to send me a screenshot of edge in one of the latest versions on windows 10 and it is perfectly compatible.

![windows-10-edge](https://user-images.githubusercontent.com/44972334/99377282-5040ed00-28c6-11eb-8240-059fab81d596.jpg)

The second resource I used to be sure of compatibility is: browserling

> Where I could test different devices and it showed that the page is compatible with all the devices I tested with.

Other resoruce I used is https://caniuse.com/ where I can quickly visualizing which frontend technologies are compatible with which browsers.

<img width="1386" alt="Captura de pantalla 2020-11-17 a las 10 37 12" src="https://user-images.githubusercontent.com/44972334/99372717-deb27000-28c0-11eb-873f-34cee9f6d1b7.png">


## 🔮 Future Improvments

Features: 

- Add a dynamic ranking/leaderboard list so while the user is playing, the player knows to which round needs to get in order to beat a new record.

- Adding some animations like confetti for when is gameover or the user breaks a record. Or making an animation for when the palyer lose a live.

- Adding github actions for making sure cypress test are passed before doing a merge.

