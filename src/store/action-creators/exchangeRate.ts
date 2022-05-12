import { Dispatch } from 'redux';
import { IRateAction, IRatesActionTypes } from 'types/exchangeRate';
import { ExchangeService } from 'API/ExchangeService';

export const getExchangeRate = (base: string) => {
	return async (dispatch: Dispatch<IRateAction>) => {
		try {
			const response = await ExchangeService.exchangeRates(base);
			console.log(response);
			dispatch({type: IRatesActionTypes.RATES_FETCH_SUCCESS, payload: response})
			
		} catch (error) {}
	};
};
