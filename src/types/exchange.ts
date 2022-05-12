export interface IExchange {
	result: number;
	resultLoading: boolean;
	error: string | null;
}

export interface StateProps {
	result: IExchange;
}

export enum IExchangeActionTypes {
	EXCHANGE_FETCH = 'EXCHANGE_FETCH',
	EXCHANGE_FETCH_SUCCESS = 'EXCHANGE_FETCH_SUCCESS',
	EXCHANGE_FETCH_ERROR = 'EXCHANGE_FETCH_ERROR',
}

interface IExchangeFetchAction {
	type: IExchangeActionTypes.EXCHANGE_FETCH;
}

interface IExchangeFetchSuccessAction {
	type: IExchangeActionTypes.EXCHANGE_FETCH_SUCCESS;
    payload: any;
}

interface IExchangeFetchErrorAction {
	type: IExchangeActionTypes.EXCHANGE_FETCH_ERROR;
	payload: string;
}

export type IExchangeAction =
	| IExchangeFetchAction
	| IExchangeFetchSuccessAction
	| IExchangeFetchErrorAction;
