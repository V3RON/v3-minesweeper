import { h, FunctionComponent } from 'preact';
import { useEffect } from 'preact/hooks';

import { ClearCellProps } from './ClearCell.types';
import { Cell } from '../Cell';
import { twCascade } from '@mariusmarais/tailwind-cascade';

export const ClearCell: FunctionComponent<ClearCellProps> = props => {
	const { className, value } = props;

	if (process.env.NODE_ENV === 'development') {
		useEffect(() => {
			if (value >= 0 && value < 9) {
				return;
			}

			console.warn('[ClearCell] Value must be between 0 and 8!');
		}, [value]);
	}

	const valueEmojiMap: Record<number, string> = {
		0: '0️⃣',
		1: '1️⃣',
		2: '2️⃣',
		3: '3️⃣',
		4: '4️⃣',
		5: '5️⃣',
		6: '6️⃣',
		7: '7️⃣',
		8: '8️⃣',
		9: '9️⃣',
	};

	return (
		<Cell
			className={twCascade(
				{
					'text-blue-600': value === 1,
					'text-green-600': value === 2,
					'text-red-600': value === 3,
					'text-blue-900': value > 3,
				},
				'bg-white',
				className,
			)}
		>
			{valueEmojiMap[value]}
		</Cell>
	);
};
