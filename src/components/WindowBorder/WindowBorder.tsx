import { FunctionComponent, h } from 'preact';

import styles from './WindowBorder.module.scss';

export const WindowBorder: FunctionComponent = props => {
	return (
		<div className={styles.root}>
			{new Array(20).fill(null).map((_, ind) => (
				<span key={ind} className={styles.item}>
					💣
				</span>
			))}
		</div>
	);
};
