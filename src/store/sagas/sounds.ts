import { select, takeEvery } from 'redux-saga/effects';

import { selectCell } from '../actions';
import { getCell } from '../selectors';
import { CellType } from '../types';
import { playBombSelectSound, playClearSelectSound } from '../../audio';

export function* cellSoundSaga(action: ReturnType<typeof selectCell>) {
	const {
		payload: { position },
	} = action;
	const cell = yield select(getCell(position));

	if (cell.type === CellType.BOMB) {
		playBombSelectSound();
	} else {
		playClearSelectSound();
	}
}

export function* soundSaga() {
	console.log('sound!');
	yield takeEvery(selectCell, cellSoundSaga);
}
