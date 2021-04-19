import { Position } from '../../store';

export interface BoardProps {
	className?: string;
	onCellSelect: (position: Position) => void;
	onCellFlag: (position: Position) => void;
	showBombs?: boolean;
}
