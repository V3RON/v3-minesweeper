export function playSound(url: string) {
	const audioElement = new Audio(url);
	audioElement.volume = 0.5;
	void audioElement.play();
}
