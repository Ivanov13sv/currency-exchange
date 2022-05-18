import { StateRates, IRateAction, IRatesActionTypes } from 'types/exchangeRate';

const initialState: StateRates = {
	rates: {},
	loading: false,
	errorRates: null,
};

export const exchangeRateReducer = (state = initialState, action: IRateAction): StateRates => {
	switch (action.type) {
		case IRatesActionTypes.RATES_FETCH:
			return { ...state, loading: true };

		case IRatesActionTypes.RATES_FETCH_SUCCESS:
			return { ...state, loading: false, ...action.payload };

		case IRatesActionTypes.RATES_FETCH_ERROR:
			return { ...state, loading: false, errorRates: action.payload };

		default:
			return state;
	}
};
