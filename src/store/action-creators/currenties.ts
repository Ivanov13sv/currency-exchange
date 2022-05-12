import { Dispatch } from 'redux';
import { ICurrenciesAction, ICurrencyActionTypes } from 'types/currencies';
import { ExchangeService } from 'API/ExchangeService';

export const fetchAllСurrencies = () => {
	return async (dispatch: Dispatch<ICurrenciesAction>) => {
		try {
			dispatch({ type: ICurrencyActionTypes.CURRENCIES_FETCH });
			const response = await ExchangeService.fetchСurrencies();
			const result = Object.entries(response).map(item => item[0]);
			dispatch({ type: ICurrencyActionTypes.CURRENCIES_FETCH_SUCCESS, payload: result });
		} catch (error) {
			dispatch({
				type: ICurrencyActionTypes.CURRENCIES_FETCH_ERROR,
				paylod: 'Произошла ошибка при загрузке списка валют',
			});
		}
	};
};
