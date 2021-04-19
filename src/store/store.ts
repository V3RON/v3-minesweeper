import { configureStore, createReducer } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import { CellDescriptor, CellType, GameStatus } from './types';
import { getNeighbours, getNewBoard, isBoardResolved } from './utils';
import {
	flagCell,
	resetGame,
	selectCell,
	startGame,
	toggleXRay,
} from './actions';
import { getCellsCount, getDiscoveredCellsCount } from './selectors';
import { rootSaga } from './sagas';
import { GAME_DIFFICULTIES, GAME_DIFFICULTY } from '../constants';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
	reducer: createReducer<RootState>(
		{
			board: null as CellDescriptor[][],
			status: GameStatus.IDLE,
			xRayMode: false,
			difficulty: null,
		},
		builder => {
			builder
				.addCase(selectCell, (state: RootState, action) => {
					if (state.status !== GameStatus.IN_PROGRESS) {
						return;
					}

					const {
						position: [x, y],
					} = action.payload;
					const selectedCell = state.board[x][y];

					if (selectedCell.flagged) {
						// Flagged cells shouldn't be discoverable
						return;
					}

					selectedCell.discovered = true;

					if (selectedCell.type === CellType.BOMB) {
						state.status = GameStatus.GAME_OVER;
					} else {
						if (selectedCell.bombsAroundCount === 0) {
							const stack = getNeighbours(selectedCell.position, state.board);

							while (stack.length > 0) {
								const node = stack.pop();

								if (node.discovered || node.type === CellType.BOMB) {
									continue;
								}

								node.discovered = true;

								if (node.bombsAroundCount === 0) {
									stack.push(
										...getNeighbours(node.position, state.board, true),
									);
								}
							}
						}

						// Check win condition
						if (isBoardResolved(state.board)) {
							state.status = GameStatus.SUCCESS;
						}
					}
				})
				.addCase(startGame, (state: RootState, action) => {
					const { difficulty } = action.payload;

					const difficultyDefinition = GAME_DIFFICULTIES.find(
						item => item.id === difficulty,
					);
					state.board = getNewBoard(
						difficultyDefinition.size,
						difficultyDefinition.bombs,
					);
					state.status = GameStatus.IN_PROGRESS;
					state.difficulty = difficulty;
				})
				.addCase(flagCell, (state: RootState, action) => {
					const {
						position: [x, y],
					} = action.payload;

					state.board[x][y].flagged = !state.board[x][y].flagged;

					// Check win condition
					if (isBoardResolved(state.board)) {
						state.status = GameStatus.SUCCESS;
					}
				})
				.addCase(toggleXRay, (state: RootState) => {
					state.xRayMode = !state.xRayMode;
				})
				.addCase(resetGame, (state: RootState) => {
					const difficultyDefinition = GAME_DIFFICULTIES.find(
						item => item.id === state.difficulty,
					);

					state.board = getNewBoard(
						difficultyDefinition.size,
						difficultyDefinition.bombs,
					);
					state.status = GameStatus.IN_PROGRESS;
				});
		},
	),
	devTools: true,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export interface RootState {
	board: CellDescriptor[][] | null;
	status: GameStatus;
	xRayMode: boolean;
	difficulty: GAME_DIFFICULTY | null;
}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
