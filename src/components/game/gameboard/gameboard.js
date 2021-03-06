import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const getGirdTemplateColumnt = (numRows) => `
calc(${100 / numRows}% - 10px)`;

const BoardWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	max-width: 500px;
`;

const enter = keyframes`
 0% {
	transform: scale(0.5);
 }
 100%{
	transform: scale(1);
 }
`;

const Tile = styled.div`
	opacity: ${(props) => (props.isVisible ? 1 : 0)};
	border: 1px solid transparent;
	position: relative;
	width: ${({ numRows }) => numRows && getGirdTemplateColumnt(numRows)};
	margin: 5px;
	box-sizing: border-box;
	border-radius: 5px;
	background-color: ${({ tileColor }) => tileColor && tileColor};
	box-shadow: 0 6px 12px -2px rgba(50, 50, 93, 0.25),
		0 3px 7px -3px rgba(0, 0, 0, 0.3);
	cursor: pointer;
	&:before {
		content: '';
		display: block;
		padding-top: 100%;
	}
	&:hover {
		transform: scale(0.97);
		transition: transform 0.1s ease-in-out;
	}
	animation: ${enter} 0.5s;
	transition: background-color 0.35s;
`;

const GameBoard = ({ tilesColors, handleSuccess, handleFail, luckyTile }) => {
	const [failedTiles, setFailedTiles] = useState([]);
	useEffect(() => {
		setFailedTiles([]);
	}, [tilesColors]);

	const handleClick = (e) => {
		const { id } = e.currentTarget;
		if (id != luckyTile) {
			handleFail();
			setFailedTiles([...failedTiles, +id]);
			return;
		}
		return handleSuccess(id);
	};
	const rowsNumbers = Math.sqrt(tilesColors.length);
	return (
		<BoardWrapper numRows={rowsNumbers} id='game-board'>
			{tilesColors.map((tileColor, index) => {
				return (
					<Tile
						key={`${tilesColors.length}-${index}`}
						id={index}
						data-testid='tile-id'
						data-qa='tile'
						numRows={rowsNumbers}
						tileColor={tileColor}
						onClick={handleClick}
						isVisible={!failedTiles.includes(index)}
					/>
				);
			})}
		</BoardWrapper>
	);
};

export default GameBoard;
