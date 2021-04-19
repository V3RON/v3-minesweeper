import { createAction } from '@reduxjs/toolkit';

import { Position } from './types';
import { GAME_DIFFICULTY } from '../constants';

export const selectCell = createAction<{ position: Position }>('SELECT_CELL');
export const startGame = createAction<{ difficulty: GAME_DIFFICULTY }>(
	'START_GAME',
);
export const flagCell = createAction<{ position: Position }>('FLAG_CELL');
export const toggleXRay = createAction('TOGGLE_XRAY');
export const resetGame = createAction('RESET_GAME');
