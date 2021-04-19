import { fork } from 'redux-saga/effects';

import { soundSaga } from './sounds';

export function* rootSaga() {
	yield fork(soundSaga);
}
