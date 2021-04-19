import { playSound } from './audio-player';

export function playBombSelectSound() {
	playSound('/assets/sounds/fail.mp3');
}

export function playClearSelectSound() {
	playSound('/assets/sounds/pop.mp3');
}
