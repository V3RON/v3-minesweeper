import { h, FunctionComponent } from 'preact';

import {
	flagCell,
	getXRayMode,
	selectCell,
	toggleXRay,
	useAppDispatch,
	useAppSelector,
} from '../store';
import { Board } from '../components/Board';

export const GamePage: FunctionComponent = () => {
	const dispatch = useAppDispatch();
	const xRayMode = useAppSelector(getXRayMode);

	return (
		<div className="">
			<button type="button" onClick={() => dispatch(toggleXRay())}>
				Xray
			</button>
			<Board
				onCellSelect={position => dispatch(selectCell({ position }))}
				onCellFlag={position => dispatch(flagCell({ position }))}
				showBombs={xRayMode}
			/>
		</div>
	);
};
