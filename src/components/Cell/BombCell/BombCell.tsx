import { h, FunctionComponent } from 'preact';

import { BombCellProps } from './BombCell.types';
import { Cell } from '../Cell';

export const BombCell: FunctionComponent<BombCellProps> = props => {
	const { className } = props;

	return <Cell className={className}>💣</Cell>;
};
