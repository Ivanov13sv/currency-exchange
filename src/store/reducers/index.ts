import { combineReducers } from 'redux';
import { currenciesReducer } from './currenciesReducer';
import { exchangeReducer } from './exchangeReducer';
import { exchangeRateReducer } from './exchangeRateReducer';
export const rootReducer = combineReducers({
	currencies: currenciesReducer,
	exchange: exchangeReducer,
	rate: exchangeRateReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
