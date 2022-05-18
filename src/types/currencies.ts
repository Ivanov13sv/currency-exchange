export interface StateCurrency {
	currencies: string[];
	loading: boolean;
	errorCurrencies: null | string;
}

export enum ICurrencyActionTypes {
	CURRENCIES_FETCH = 'CURRENCIES_FETCH',
	CURRENCIES_FETCH_SUCCESS = 'CURRENCIES_FETCH_SUCCESS',
	CURRENCIES_FETCH_ERROR = 'CURRENCIES_FETCH_ERROR',
}

interface ICurrenciesFetchAction {
	type: ICurrencyActionTypes.CURRENCIES_FETCH;
}
interface ICurrenciesFetchSuccessAction {
	type: ICurrencyActionTypes.CURRENCIES_FETCH_SUCCESS;
	payload: string[];
}

interface ICurrenciesFetchErrorAction {
	type: ICurrencyActionTypes.CURRENCIES_FETCH_ERROR;
	payload: string;
}

export type ICurrenciesAction =
	| ICurrenciesFetchAction
	| ICurrenciesFetchSuccessAction
	| ICurrenciesFetchErrorAction;
