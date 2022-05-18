import React from 'react';
import styles from 'components/Header/style.module.scss';
import { Link, useLocation } from 'react-router-dom';

import { Container } from 'components/Container';

export const Header = () => {
	const { pathname } = useLocation();

	const path = pathname === '/' ? '/exchange-rate' : '/';

	return (
		<header className={styles.header}>
			<Container>
				<div className={styles.header__wrapper}>
					<span className={styles.title}>
						{path === '/' ? 'Курс валют' : 'Обмен валют'}
					</span>
					<nav>
						<Link className={styles.navBtn} to={path}>
							{path === '/' ? 'Обмен валют' : 'Курс валют'}
						</Link>
					</nav>
				</div>
			</Container>
		</header>
	);
};
