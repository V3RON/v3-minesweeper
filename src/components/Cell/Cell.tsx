import { h, FunctionComponent, RenderableProps } from 'preact';
import { twCascade } from '@mariusmarais/tailwind-cascade';

import { CellProps } from './Cell.types';

export const Cell: FunctionComponent<CellProps> = (
	props: RenderableProps<CellProps>,
) => {
	const { className, children, onClick, onRightClick } = props;

	const handleOnRightClick = (event: MouseEvent) => {
		event.preventDefault();
		onRightClick?.(event);
	};

	return (
		<button
			className={twCascade(
				'flex justify-center items-center w-8 h-8 font-bold',
				'bg-white shadow-inner',
				'select-none focus:outline-none',
				className,
			)}
			onClick={onClick}
			onContextMenu={handleOnRightClick}
		>
			{children}
		</button>
	);
};
