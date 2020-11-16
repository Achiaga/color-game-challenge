import React from 'react';
import { render, screen, within, fireEvent } from '@testing-library/react';
import SettingsGame from './settings-game';

const renderComponent = (props) => {
	return render(<SettingsGame {...props} />);
};

const initialProps = {
	rounds: 2,
	lives: 3,
};

const ROUNDS_ID = 'rounds-id';
const HEART_ID = 'heart-id';
const HEART_ICON_ID = 'heart-icon-id';

const getItemSettings = (ID, conditionIndex = 0) => {
	return screen.getAllByTestId(ID)[conditionIndex];
};

describe('Settings Game', () => {
	it('should render a the rounds of the player', () => {
		renderComponent(initialProps);
		const roundsItem = getItemSettings(ROUNDS_ID);
		expect(roundsItem).toBeInTheDocument();
	});
	it('should render a the lives of the player', () => {
		renderComponent(initialProps);
		const livesItem = getItemSettings(HEART_ID);
		expect(livesItem).toBeInTheDocument();
	});
	it('should render a the rounds of the player', () => {
		renderComponent(initialProps);
		const roundsItem = getItemSettings(ROUNDS_ID);
		expect(roundsItem).toHaveTextContent(/Round 2/i);
	});
	it('should render a the rounds of the player', () => {
		renderComponent(initialProps);
		const heatsIconItem = screen.getAllByTestId(HEART_ICON_ID);
		expect(heatsIconItem).toHaveLength(3);
	});
});
