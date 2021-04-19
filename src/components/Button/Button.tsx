import { h, FunctionComponent } from 'preact';

import { ButtonProps } from './Button.types';
import { twCascade } from '@mariusmarais/tailwind-cascade';

export const Button: FunctionComponent<ButtonProps> = props => {
	const { className, children, onClick } = props;

	return (
		<button
			className={twCascade(
				'px-2 py-1 bg-white shadow-md focus:outline-none',
				className,
			)}
			type="button"
			onClick={onClick}
		>
			{children}
		</button>
	);
};
