import { ISelectActionType, ISelectToggleAction } from 'types/select';

export const selectToggle = (payload: boolean): ISelectToggleAction => ({
	type: ISelectActionType.SELECT_TOGGLE,
	payload,
});
