import { FunctionComponent, h } from 'preact';

import { startGame, useAppDispatch } from '../store';
import { GAME_DIFFICULTY } from '../constants';
import { Card } from '../components/Card';
import { WindowBorder } from '../components/WindowBorder';
import { Button } from '../components/Button';

const MainPage: FunctionComponent = () => {
	const dispatch = useAppDispatch();

	const runGame = (difficulty: GAME_DIFFICULTY) => {
		dispatch(startGame({ difficulty }));
	};

	return (
		<>
			<WindowBorder />
			<Card className="max-w-sm w-full z-10">
				<h1 className="text-2xl mb-4">💣 Minesweeper ⛳</h1>
				<div className="space-x-2">
					{['Beginner', 'Intermediate', 'Expert'].map(diffName => (
						<Button
							key={diffName}
							onClick={() => runGame(GAME_DIFFICULTY[diffName.toUpperCase()])}
						>
							{diffName}
						</Button>
					))}
				</div>
			</Card>
		</>
	);
};

export default MainPage;
