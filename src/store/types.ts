export enum GameStatus {
	IDLE = 'IDLE',
	IN_PROGRESS = 'IN_PROGRESS',
	GAME_OVER = 'GAME_OVER',
	SUCCESS = 'SUCCESS',
}

export enum CellType {
	BOMB = 'BOMB',
	CLEAR = 'CLEAR',
}

export interface CellDescriptor {
	type: CellType;
	position: Position;
	bombsAroundCount: number;
	discovered: boolean;
	flagged: boolean;
}

export type Position = [number, number];
