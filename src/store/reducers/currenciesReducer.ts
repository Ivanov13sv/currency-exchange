import { StateCurrency, ICurrenciesAction, ICurrencyActionTypes } from 'types/currencies';

const initialState: StateCurrency = {
	currencies: [],
	loading: false,
	error: null,
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
			return { ...state, loading: false, error: 'Произошла ошибка при загрузке валют' };
		default:
			return state;
	}
};
