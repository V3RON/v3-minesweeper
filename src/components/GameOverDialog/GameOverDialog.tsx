import { h, FunctionComponent } from 'preact';
import { twCascade } from '@mariusmarais/tailwind-cascade';

import { Dialog } from '../Dialog';
import { GameOverDialogProps } from './GameOverDialog.types';
import { WindowBorder } from '../WindowBorder';
import { Button } from '../Button';

export const GameOverDialog: FunctionComponent<GameOverDialogProps> = props => {
	const { className, open, onReset } = props;

	return (
		<>
			{open && <WindowBorder />}
			<Dialog className={twCascade('text-center', className)} open={open}>
				<h1 className="text-2xl mb-4">💣 Game Over 💣</h1>
				<Button onClick={onReset}>Reset</Button>
			</Dialog>
		</>
	);
};
