import { combineReducers } from 'redux';
import { currenciesReducer } from './currenciesReducer';
import { exchangeReducer } from './exchangeReducer';
import { exchangeRateReducer } from './exchangeRateReducer';
import { selectReducer } from './selectReducer';

export const rootReducer = combineReducers({
	currencies: currenciesReducer,
	exchange: exchangeReducer,
	rate: exchangeRateReducer,
	select: selectReducer
});

export type RootState = ReturnType<typeof rootReducer>;
