import { Container } from 'components/Container';
import { useActions } from 'hooks/useActions';
import { ExchangePage } from 'pages/ExchangePage';
import { RatePage } from 'pages/RatePage';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotFoundPage } from 'pages/NotFoundPage';

export const Main = () => {
	const { fetchAllСurrencies } = useActions();

	useEffect(() => {
		fetchAllСurrencies();
	}, []);

	return (
		<main>
			<Container>
				<Routes>
					<Route path="/exchange" element={<ExchangePage />} />

					<Route path="/exchange-rate" element={<RatePage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Container>
		</main>
	);
};
