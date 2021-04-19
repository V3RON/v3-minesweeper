import { RootState } from './store';
import { CellDescriptor, CellType, GameStatus, Position } from './types';

export function getBombsCount(state: RootState): number {
	return state.board
		.reduce((agg, row) => [...agg, ...row], [])
		.filter(cell => cell.type === CellType.BOMB).length;
}

export function getDiscoveredCellsCount(state: RootState): number {
	return state.board
		.reduce((agg, row) => [...agg, ...row], [])
		.filter(cell => cell.discovered).length;
}

export function getBoard(state: RootState): CellDescriptor[][] {
	return state.board;
}

export function getCellsCount(state: RootState): number {
	return state.board.length * state.board.length[0];
}

export function getGameStatus(state: RootState): GameStatus {
	return state.status;
}

export function getCell(
	position: Position,
): (state: RootState) => CellDescriptor {
	const [x, y] = position;
	return state => state.board[x][y];
}

export function getXRayMode(state: RootState): boolean {
	return state.xRayMode;
}
