import { IExchange, IExchangeAction, IExchangeActionTypes } from 'types/exchange';
const initialState: IExchange = {
	result: 1,
	resultLoading: false,
	error: null,
};

export const exchangeReducer = (state = initialState, action: IExchangeAction): IExchange => {
	switch (action.type) {
		case IExchangeActionTypes.EXCHANGE_FETCH:
			return { ...state, resultLoading: true };

		case IExchangeActionTypes.EXCHANGE_FETCH_SUCCESS:
			return { ...state, resultLoading: false, result: action.payload };

		case IExchangeActionTypes.EXCHANGE_FETCH_ERROR:
			return { ...state, resultLoading: false, error: action.payload };

		default:
			return state;
	}
};
