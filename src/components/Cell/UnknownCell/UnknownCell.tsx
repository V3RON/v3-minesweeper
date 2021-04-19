import { h, FunctionComponent } from 'preact';

import { UnknownCellProps } from './UnknownCell.types';
import { Cell } from '../Cell';
import { twCascade } from '@mariusmarais/tailwind-cascade';

export const UnknownCell: FunctionComponent<UnknownCellProps> = props => {
	const { className, onClick, onRightClick } = props;

	return (
		<Cell
			className={twCascade('hover:shadow-2xl', className)}
			onClick={onClick}
			onRightClick={onRightClick}
		/>
	);
};
