import { FunctionComponent, h } from 'preact';
import { lazy, Suspense } from 'preact/compat';

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
import MainPage from '../../pages/MainPage';

const GamePage = lazy(() => import('../../pages/GamePage'))

export const Router: FunctionComponent<RouterProps> = () => {
	const dispatch = useAppDispatch();
	const status = useAppSelector(getGameStatus);

	return (() => {
		switch (status) {
			case GameStatus.IN_PROGRESS:
			case GameStatus.GAME_OVER:
			case GameStatus.SUCCESS:
				return (
					<Suspense fallback={<div>Loading</div>}>
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
					</Suspense>
				);
			case GameStatus.IDLE:
				return <MainPage />;
		}
	})();
};
