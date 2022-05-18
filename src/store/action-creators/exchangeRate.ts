import { Dispatch } from 'redux';
import { IRateAction, IRatesActionTypes } from 'types/exchangeRate';
import { ExchangeService } from 'API/ExchangeService';

export const getExchangeRate = (base: string) => {
	return async (dispatch: Dispatch<IRateAction>) => {
		dispatch({ type: IRatesActionTypes.RATES_FETCH });
		try {
			const response = await ExchangeService.exchangeRates(base);
			dispatch({ type: IRatesActionTypes.RATES_FETCH_SUCCESS, payload: response });
		} catch (error) {
			dispatch({
				type: IRatesActionTypes.RATES_FETCH_ERROR,
				payload: 'Произошла ошибка при работе с сервером',
			});
		}
	};
};
