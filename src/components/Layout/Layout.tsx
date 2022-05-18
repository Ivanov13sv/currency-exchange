import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header';
import { Container } from 'components/Container';
import styles from './style.module.scss';


export const Layout = () => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<main className={styles.main}>
				<Container>
					<Outlet />
				</Container>
			</main>
			<footer className={styles.footer}>2022</footer>
		</div>
	);
};
