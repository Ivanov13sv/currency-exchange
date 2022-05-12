import { ReactNode } from 'react';
import { FC } from 'react';

import styled from './styles.module.scss';

interface ContainerProps {
	children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => {
	return <div className={styled.container}>{children}</div>;
};
