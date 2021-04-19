import { CellDescriptor, CellType, GameStatus, Position } from './types';
import random from '../utils/random';
import { getCellsCount, getDiscoveredCellsCount } from './selectors';

export function getNewBoard(
	size: [number, number],
	bombsCount: number,
): CellDescriptor[][] {
	const [sizeX, sizeY] = size;
	let currentBombCount = 0;
	const bombs: Record<number, Record<number, boolean>> = {};

	while (currentBombCount < bombsCount) {
		const x = random.integer(0, sizeX);
		const y = random.integer(0, sizeY);

		if (bombs[x]?.[y]) {
			continue;
		}

		if (bombs[x] == null) {
			bombs[x] = {};
		}

		bombs[x][y] = true;
		currentBombCount++;
	}

	const board = new Array(sizeX).fill(null).map((_, x) =>
		new Array(sizeY).fill(null).map(
			(_, y) =>
				({
					type: bombs[x]?.[y] ? CellType.BOMB : CellType.CLEAR,
					discovered: false,
					flagged: false,
					position: [x, y],
					bombsAroundCount: 0,
				} as CellDescriptor),
		),
	);

	return board.map(row =>
		row.map(cell => ({
			...cell,
			bombsAroundCount: getNearbyBombsCount(cell.position, board),
		})),
	);
}

export function getNearbyBombsCount(
	position: Position,
	board: CellDescriptor[][],
): number {
	return getNeighbours(position, board).filter(
		suspect => suspect.type === CellType.BOMB,
	).length;
}

export function getNeighbours(
	position: Position,
	board: CellDescriptor[][],
	onlyXY = false,
): CellDescriptor[] {
	return [
		...(onlyXY
			? []
			: [
					[-1, -1],
					[1, -1],
					[-1, 1],
					[1, 1],
			  ]),
		[0, -1],
		[-1, 0],
		[1, 0],
		[0, 1],
	]
		.map(offset => [position[0] + offset[0], position[1] + offset[1]])
		.filter(
			suspect =>
				suspect[0] >= 0 &&
				suspect[0] < board.length &&
				suspect[1] >= 0 &&
				suspect[1] < board.length,
		)
		.map(position => board[position[0]][position[1]])
		.filter(cell => !!cell);
}

export function isBoardResolved(board: CellDescriptor[][]): boolean {
	const flattenedBoard = board.flat();

	const markedBombsCount = flattenedBoard
		.filter(cell => cell.type === CellType.BOMB)
		.filter(bomb => bomb.flagged).length;
	const discoveredCount = flattenedBoard.filter(cell => cell.discovered).length;
	const cellsCount = flattenedBoard.length;

	return markedBombsCount + discoveredCount === cellsCount;
}
