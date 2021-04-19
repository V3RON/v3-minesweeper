import { FunctionComponent, h } from 'preact';

import { BombCell, ClearCell, UnknownCell } from '../Cell';
import { CellType, getBoard, useAppSelector } from '../../store';
import { BoardProps } from './Board.types';
import { FlagCell } from '../Cell/FlagCell';
import { twCascade } from '@mariusmarais/tailwind-cascade';

export const Board: FunctionComponent<BoardProps> = props => {
	const { className, onCellSelect, onCellFlag, showBombs } = props;

	const board = useAppSelector(getBoard);

	return (
		<div className={twCascade('flex flex-wrap', className)}>
			{board.map(row => (
				<div>
					{row.map(cell => {
						const id = `${cell.position[0]}:${cell.position[1]}`;

						if (showBombs && cell.type === CellType.BOMB) {
							return <BombCell className="bg-red" key={id} />;
						}

						if (cell.flagged) {
							return (
								<FlagCell
									key={id}
									onRightClick={() => onCellFlag(cell.position)}
								/>
							);
						}

						if (!cell.discovered) {
							return (
								<UnknownCell
									key={id}
									onClick={() => onCellSelect(cell.position)}
									onRightClick={() => onCellFlag(cell.position)}
								/>
							);
						}

						if (cell.type! === CellType.BOMB) {
							return <BombCell key={id} />;
						}

						return <ClearCell key={id} value={cell.bombsAroundCount} />;
					})}
				</div>
			))}
		</div>
	);
};
