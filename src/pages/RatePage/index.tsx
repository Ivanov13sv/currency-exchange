import { useEffect, useState } from 'react';
import { Control } from 'components/UI/Control';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { ReactComponent as Equals } from 'assets/images/icons/equals.svg';
import { useActions } from 'hooks/useActions';

import { Spiner } from 'components/UI/Spiner';
import { ErrorMessage } from 'components/UI/ErrorMessage';
import styles from './style.module.scss';

export const RatePage = () => {
	const { currencies, errorCurrencies } = useTypedSelector(state => state.currencies);
	const { rates, loading, errorRates } = useTypedSelector(state => state.rate);
	const { getExchangeRate } = useActions();
	const [currentCurrency, setCurrentCurrency] = useState('');

	useEffect(() => {
		if (currencies) {
			setCurrentCurrency(currencies[0]);
		}
	}, [currencies]);

	useEffect(() => {
		if (currentCurrency) {
			getExchangeRate(currentCurrency);
		}
		//eslint-disable-next-line
	}, [currentCurrency]);

	if (errorRates) return <ErrorMessage message={errorRates} />;
	if (errorCurrencies) return <ErrorMessage message={errorCurrencies} />;

	return (
		<section>
			<h1 className={styles.mainTitle}>Текущий курс валют</h1>
			<div className={styles.rates__body}>
				<Control
					value="1"
					disabled
					selectedCurrency={currentCurrency}
					setCurrency={setCurrentCurrency}
					selectItems={currencies}
				/>
				<div className={styles.equals}>
					{loading ? <Spiner /> : <Equals style={{ width: '100%', height: '100%' }} />}
				</div>
				{/* <div className={styles.equals}> <Spiner /> </div> */}
				<ul className={styles.rates__body__list}>
					{Object.entries(rates).map((item: any, i) => (
						<li className={styles.list__item} key={i}>
							<span className={styles.item__name}>{item[0]}</span>
							<span className={styles.item__value}>{item[1]}</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};
