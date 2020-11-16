import React from 'react';
import { render, screen, within, fireEvent } from '@testing-library/react';

import { populatedTilesColors, getMathRandom } from './game-engine';

describe.only('game-engine', () => {
	describe('populatedTilesColors', () => {
		const emptyTiles = new Array(4).fill('');
		const LUCKY_TILE_INDEX = 1;
		const RGB_HUE_COLOR = 129;
		const ROUND = 0;
		const value = populatedTilesColors(
			LUCKY_TILE_INDEX,
			emptyTiles,
			RGB_HUE_COLOR,
			ROUND
		);
		test.each(value)('should match the hsl color pattern', (color) => {
			expect(color).toMatch(
				/hsl\(129, \b([0-9]|[1-9][0-9]|100)\b\%, \b([0-9]|[1-9][0-9]|100)\b\%\)/
			);
		});
		it('should have the tile 1 in different color', () => {
			expect(value[1]).not.toEqual(value[0]);
			expect(value[0]).toEqual(value[2]);
		});
	});
	describe('getMathRandom', () => {
		describe('populatedTilesColors', () => {
			const randomValues = [
				[0, 1],
				[10, 20],
				[30, 200],
			];
			test.each(randomValues)(
				'should be greater than %d and smaller thatn %d',
				(min, max) => {
					expect(getMathRandom(min, max)).toBeGreaterThan(min - 1);
					expect(getMathRandom(min, max)).toBeLessThan(max + 1);
				}
			);
		});
	});
});
