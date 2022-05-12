import { StateRates, IRateAction, IRatesActionTypes } from 'types/exchangeRate';

const initialState: StateRates = {
	amount: '1',
	base: '',
	date: '',
	rates: {},
};

export const exchangeRateReducer = (state = initialState, action: IRateAction): StateRates => {
	switch (action.type) {
		case IRatesActionTypes.RATES_FETCH_SUCCESS:
			return { ...state, ...action.payload };

		default:
			return state;
	}
};
