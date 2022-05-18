import * as currentiesActions from './currenties';
import * as exchangeActions from './exchange';
import * as exchangeRate from './exchangeRate';
import * as selectActions from './select';

export const allActions = {
	...currentiesActions,
	...exchangeActions,
	...exchangeRate,
	...selectActions,
};
