export interface ISelect {
	isOpen: boolean;
}

export enum ISelectActionType {
	SELECT_TOGGLE = 'SELECT_TOGGLE',
}

export interface ISelectToggleAction {
	type: ISelectActionType.SELECT_TOGGLE;
	payload: boolean;
}
