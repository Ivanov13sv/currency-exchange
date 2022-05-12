import { ExchangeService } from 'API/ExchangeService';
import { Dispatch } from 'redux';
import { IExchangeAction, IExchangeActionTypes } from 'types/exchange';

export const changeСurrency = (amount: number, from: string, to: string) => {
	return async (dispatch: Dispatch<IExchangeAction>) => {
		try {
			dispatch({ type: IExchangeActionTypes.EXCHANGE_FETCH });
			if (amount && from && to) {
				const response = await ExchangeService.convertCurrency(amount, from, to);
				const result = Object.values(response.rates)[0];
				dispatch({ type: IExchangeActionTypes.EXCHANGE_FETCH_SUCCESS, payload: result });
			}
		} catch (error) {
			dispatch({
				type: IExchangeActionTypes.EXCHANGE_FETCH_ERROR,
				payload: 'Произошла ошибка во время работы с сервером',
			});
		}
	};
};
