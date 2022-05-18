import { FC } from 'react';
import styles from './style.module.scss';

interface SpinProps {
	width?: string;
	height?: string;
}

export const Spiner: FC<SpinProps> = ({ width, height }) => {
	return <div  className={styles.spiner} />;
};
