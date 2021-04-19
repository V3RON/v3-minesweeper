import { h, FunctionComponent } from 'preact';

import { DialogProps } from './Dialog.types';
import { createPortal } from 'preact/compat';
import { twCascade } from '@mariusmarais/tailwind-cascade';
import { useEffect, useRef } from 'preact/hooks';

export const Dialog: FunctionComponent<DialogProps> = props => {
	const { className, open, onClose, children } = props;
	const rootRef = useRef<HTMLDivElement | null>();

	useEffect(() => {
		if (!open) {
			return;
		}

		const handler = (event: MouseEvent) => {
			if (
				rootRef.current &&
				rootRef.current.contains(event.target as Element)
			) {
				onClose?.();
			}
		};
		document.addEventListener('click', handler);

		return () => {
			document.removeEventListener('click', handler);
		};
	}, [open, onClose]);

	const content = (
		<div className="fixed left-0 top-0 w-full h-full bg-white bg-opacity-50">
			<div
				ref={rootRef}
				className={twCascade(
					'fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md w-full border py-4 px-8 bg-white',
					className,
				)}
			>
				{children}
			</div>
		</div>
	);

	return open && createPortal(content, document.body);
};
