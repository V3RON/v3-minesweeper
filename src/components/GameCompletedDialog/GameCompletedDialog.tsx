import { h, FunctionComponent } from 'preact';
import { twCascade } from '@mariusmarais/tailwind-cascade';

import { Dialog } from '../Dialog';
import { WindowBorder } from '../WindowBorder';
import { Button } from '../Button';
import { GameCompletedDialogProps } from './GameCompletedDialog.types';

export const GameCompletedDialog: FunctionComponent<GameCompletedDialogProps> = props => {
	const { className, open, onReset } = props;

	return (
		<>
			{open && <WindowBorder />}
			<Dialog className={twCascade('text-center', className)} open={open}>
				<h1 className="text-2xl mb-4">💣 You Win! 💣</h1>
				<Button onClick={onReset}>Reset</Button>
			</Dialog>
		</>
	);
};
