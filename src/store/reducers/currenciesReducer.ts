import { StateCurrency, ICurrenciesAction, ICurrencyActionTypes } from 'types/currencies';

const initialState: StateCurrency = {
	currencies: [],
	loading: false,
	errorCurrencies: null,
};

export const currenciesReducer = (
	state = initialState,
	action: ICurrenciesAction
): StateCurrency => {
	switch (action.type) {
		case ICurrencyActionTypes.CURRENCIES_FETCH:
			return { ...state, loading: true };

		case ICurrencyActionTypes.CURRENCIES_FETCH_SUCCESS:
			return { ...state, loading: false, currencies: action.payload };

		case ICurrencyActionTypes.CURRENCIES_FETCH_ERROR:
			return { ...state, loading: false, errorCurrencies: action.payload };
		default:
			return state;
	}
};
