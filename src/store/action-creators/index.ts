import * as currentiesActions from './currenties';
import * as exchangeActions from './exchange';
import * as exchangeRate from './exchangeRate';

export const allActions = {
	...currentiesActions,
	...exchangeActions,
	...exchangeRate,
};
