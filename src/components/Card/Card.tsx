import { h, FunctionComponent } from 'preact';

import { CardProps } from './Card.types';
import { twCascade } from '@mariusmarais/tailwind-cascade';

export const Card: FunctionComponent<CardProps> = props => {
	const { className, children } = props;

	return (
		<div
			className={twCascade('px-8 py-4 shadow bg-white text-center', className)}
		>
			{children}
		</div>
	);
};
