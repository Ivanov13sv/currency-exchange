import  { FC } from 'react';
import styles from './style.module.scss';

interface ErrorMessageProps {
	message: string;
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
	return <h1 className={styles.errorMsg}>{message}</h1>;
};
