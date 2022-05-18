import { Header } from 'components/Header';
import { Router } from 'components/Router/Router';
import { BrowserRouter } from 'react-router-dom';

import styles from './app.module.scss';

function App() {
	return (
		<BrowserRouter>
			<div className={styles.app}>
				<Router />
			</div>
		</BrowserRouter>
	);
}

export default App;
