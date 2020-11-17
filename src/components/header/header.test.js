import React from 'react';
import { render, screen, within, fireEvent } from '@testing-library/react';
import Header from './header';

const renderComponent = (props) => {
	return render(<Header {...props} />);
};

const HEADER_ID = 'header-id';

const getHeaderId = (ID, conditionIndex = 0) => {
	return screen.getAllByTestId(ID)[conditionIndex];
};

describe('Header', () => {
	it('should render a the header', () => {
		renderComponent();
		const headerTitle = getHeaderId(HEADER_ID);
		expect(headerTitle).toBeInTheDocument();
	});
	it('should contain a the header title', () => {
		renderComponent();
		const headerTitle = getHeaderId(HEADER_ID);
		expect(headerTitle).toHaveTextContent(/rgbgame/i);
	});
});
