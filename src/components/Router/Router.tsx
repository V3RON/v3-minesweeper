import { FunctionComponent, h } from 'preact';
import { lazy } from 'preact/compat';

import {
	GameStatus,
	getGameStatus,
	resetGame,
	useAppDispatch,
	useAppSelector,
} from '../../store';
import { RouterProps } from './Router.types';
import { GameOverDialog } from '../GameOverDialog';
import { GameCompletedDialog } from '../GameCompletedDialog';

const GamePage = lazy(() => import('../../pages/GamePage'));
const MainPage = lazy(() => import('../../pages/MainPage'));

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
