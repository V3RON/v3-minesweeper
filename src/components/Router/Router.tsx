import { FunctionComponent, h } from 'preact';

import {
	GameStatus,
	getGameStatus,
	resetGame,
	useAppDispatch,
	useAppSelector,
} from '../../store';
import { GamePage } from '../../pages/GamePage';
import { MainPage } from '../../pages/MainPage';
import { RouterProps } from './Router.types';
import { GameOverDialog } from '../GameOverDialog';
import { GameCompletedDialog } from '../GameCompletedDialog';

export const Router: FunctionComponent<RouterProps> = () => {
	const dispatch = useAppDispatch();
	const status = useAppSelector(getGameStatus);

	return (() => {
		switch (status) {
			case GameStatus.IN_PROGRESS:
			case GameStatus.GAME_OVER:
			case GameStatus.SUCCESS:
				return (
					<>
						<GamePage />
						<GameOverDialog
							open={status === GameStatus.GAME_OVER}
							onReset={() =>
								dispatch(resetGame())
							}
						/>
						<GameCompletedDialog
							open={status === GameStatus.SUCCESS}
							onReset={() =>
								dispatch(resetGame())
							}
						/>
					</>
				);
			case GameStatus.IDLE:
				return <MainPage />;
		}
	})();
};
