// добавить loading, error
export interface StateRates {
	rates: {};
	loading: boolean;
	errorRates: string | null;
}

export enum IRatesActionTypes {
	RATES_FETCH = 'RATES_FETCH',
	RATES_FETCH_SUCCESS = 'RATES_FETCH_SUCCESS',
	RATES_FETCH_ERROR = 'RATES_FETCH_ERROR',
}

interface IRatesFetchSuccessAction {
	type: IRatesActionTypes.RATES_FETCH_SUCCESS;
	payload: {
		rates: {};
	};
}

interface IRatesFetchAction {
	type: IRatesActionTypes.RATES_FETCH;
}

interface IRatesFetchErrorAction {
	type: IRatesActionTypes.RATES_FETCH_ERROR;
	payload: string;
}

export type IRateAction = 
	IRatesFetchSuccessAction 
	| IRatesFetchAction 
	| IRatesFetchErrorAction;
