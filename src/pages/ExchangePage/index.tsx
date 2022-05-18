import { ChangeEvent, useEffect, useState } from 'react';
import { Control } from 'components/UI/Control';
import { ReactComponent as Arrow } from 'assets/images/icons/right-arrow.svg';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useActions } from 'hooks/useActions';

import { Spiner } from 'components/UI/Spiner';
import { ErrorMessage } from 'components/UI/ErrorMessage';
import styles from './style.module.scss';

export const ExchangePage = () => {
	const { currencies, errorCurrencies, loading } = useTypedSelector(state => state.currencies);
	const { result, resultLoading } = useTypedSelector(state => state.exchange);
	const [amount, setAmount] = useState('1');
	const [baseCurrency, setBaseCurrency] = useState({
		from: '',
		to: '',
	});

	const { changeСurrency } = useActions();

	const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setAmount(e.target.value);
	};

	useEffect(() => {
		setBaseCurrency({
			from: currencies[0],
			to: currencies[1],
		});
	}, [currencies]);

	useEffect(() => {
		if (currencies.length) {
			changeСurrency(parseFloat(amount), baseCurrency.from, baseCurrency.to);
		}
	}, [amount, baseCurrency]);

	const setFromCurrency = (currency: string): void => {
		if (currency === baseCurrency.to) {
			setBaseCurrency({ ...baseCurrency, to: baseCurrency.from, from: currency });
		} else {
			setBaseCurrency({ ...baseCurrency, from: currency });
		}
	};

	const setToCurrency = (currency: string): void => {
		if (currency === baseCurrency.from) {
			setBaseCurrency({ ...baseCurrency, from: baseCurrency.to, to: currency });
		} else {
			setBaseCurrency({ ...baseCurrency, to: currency });
		}
	};

	if (errorCurrencies) return <ErrorMessage message={errorCurrencies} />;

	return (
		<section>
			<h1 className={styles.mainTitle}>Конвертировать валюту</h1>
			<div className={styles.controls}>
				<Control
					selectItems={currencies}
					value={amount}
					onChange={onChange}
					selectedCurrency={baseCurrency.from}
					setCurrency={setFromCurrency}
				/>
				<div className={styles.arrow}>
					{loading ? <Spiner /> : <Arrow style={{ width: '100%', height: '100%' }} />}
				</div>

				{/* <Spiner /> */}

				<Control
					selectItems={currencies}
					disabled
					loading={resultLoading}
					value={String(result)}
					selectedCurrency={baseCurrency.to}
					setCurrency={setToCurrency}
				/>
			</div>
		</section>
	);
};
