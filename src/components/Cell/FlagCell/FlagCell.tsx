import { FunctionComponent, h } from 'preact';
import { twCascade } from '@mariusmarais/tailwind-cascade';

import { Cell } from '../Cell';
import { FlagCellProps } from './FlagCell.types';

export const FlagCell: FunctionComponent<FlagCellProps> = props => {
	const { className, onRightClick } = props;

	return (
		<Cell className={twCascade('', className)} onRightClick={onRightClick}>
			🚩
		</Cell>
	);
};
