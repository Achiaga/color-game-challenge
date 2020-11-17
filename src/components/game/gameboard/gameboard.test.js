import React from 'react';
import { render, screen, within, fireEvent } from '@testing-library/react';
import Gameboard from './gameboard';

const renderComponent = (props) => {
	return render(<Gameboard {...props} />);
};

const initialProps = {
	tilesColors: [
		'hsl(14, 50%, 50%)',
		'hsl(14, 50%, 50%)',
		'hsl(14, 10%, 90%)',
		'hsl(14, 50%, 50%)',
		'hsl(14, 50%, 50%)',
		'hsl(14, 50%, 50%)',
		'hsl(14, 50%, 50%)',
		'hsl(14, 50%, 50%)',
		'hsl(14, 50%, 50%)',
	],
	luckyTile: 2,
};

const TILES_ID = 'tile-id';

const getItemSettings = (ID, conditionIndex = 0) => {
	return screen.getAllByTestId(ID)[conditionIndex];
};

describe('Gameboard', () => {
	it('should render the tiles of the game', () => {
		renderComponent(initialProps);
		const tilesItem = getItemSettings(TILES_ID);
		expect(tilesItem).toBeInTheDocument();
	});
	it('should render all the tiles of the game', () => {
		renderComponent(initialProps);
		const tilesItem = screen.getAllByTestId(TILES_ID);
		expect(tilesItem).toHaveLength(9);
	});
	it('should call failed function when Player click on a unlucky tile', () => {
		const handleSuccess = jest.fn();
		const handleFail = jest.fn();
		renderComponent({ ...initialProps, handleSuccess, handleFail });
		const tilesItem = getItemSettings(TILES_ID, 0);
		fireEvent.click(tilesItem);
		expect(handleFail).toBeCalled();
	});
	it('should call success function when Player click on a lucky tile', () => {
		const handleSuccess = jest.fn();
		const handleFail = jest.fn();
		renderComponent({ ...initialProps, handleSuccess, handleFail });
		const tilesItem = getItemSettings(TILES_ID, 2);
		fireEvent.click(tilesItem);
		expect(handleSuccess).toBeCalled();
	});
});
