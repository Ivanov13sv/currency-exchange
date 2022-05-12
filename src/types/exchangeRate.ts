// добавить loading, error
export interface StateRates {
	amount: string;
	base: string;
	date: string;
	rates: {};
}

export enum IRatesActionTypes {
	RATES_FETCH = 'RATES_FETCH',
	RATES_FETCH_SUCCESS = 'RATES_FETCH_SUCCESS',
}

interface IRatesFetchSuccessAction {
	type: IRatesActionTypes.RATES_FETCH_SUCCESS;
	payload: {
		base: string;
		date: string;
		rates: {};
	};
}

export type IRateAction = IRatesFetchSuccessAction;
