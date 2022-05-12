import { Header } from 'components/Header';
import { Main } from 'components/Main/Main';
import { BrowserRouter } from 'react-router-dom';

import styles from './app.module.scss';

function App() {
	return (
		<BrowserRouter>
			<div className={styles.app}>
				<Header />
				<Main />
			</div>
		</BrowserRouter>
	);
}

export default App;
