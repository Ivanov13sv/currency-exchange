import { useActions } from 'hooks/useActions';
import { ExchangePage } from 'pages/ExchangePage';
import { RatePage } from 'pages/RatePage';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotFoundPage } from 'pages/NotFoundPage';
import { Layout } from 'components/Layout/Layout';

export const Router = () => {
	const { fetchAllСurrencies } = useActions();

	useEffect(() => {
		fetchAllСurrencies();
		// eslint-disable-next-line
	}, []);

	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<ExchangePage />} />
				<Route path="/exchange-rate" element={<RatePage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</Routes>
	);
};
