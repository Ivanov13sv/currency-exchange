import { ISelect, ISelectActionType, ISelectToggleAction } from 'types/select';
const initialState: ISelect = {
	isOpen: false,
};

export const selectReducer = (state = initialState, action: ISelectToggleAction): ISelect => {
	switch (action.type) {
		case ISelectActionType.SELECT_TOGGLE:
			return { ...state, isOpen: action.payload };

		default:
			return state;
	}
};
