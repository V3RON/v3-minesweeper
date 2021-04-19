export const BOMB_PERCENTAGE: number = 0.3;

export enum GAME_DIFFICULTY {
	BEGINNER = 'BEGINNER',
	INTERMEDIATE = 'INTERMEDIATE',
	EXPERT = 'EXPERT',
}

export const GAME_DIFFICULTIES: {
	id: GAME_DIFFICULTY;
	size: [number, number];
	bombs: number;
}[] = [
	{
		id: GAME_DIFFICULTY.BEGINNER,
		size: [8, 8],
		bombs: 10,
	},
	{
		id: GAME_DIFFICULTY.INTERMEDIATE,
		size: [16, 16],
		bombs: 40,
	},
	{
		id: GAME_DIFFICULTY.EXPERT,
		size: [30, 16],
		bombs: 99,
	},
];
