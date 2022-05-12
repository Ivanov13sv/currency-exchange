import axios from 'axios';

const instance = axios.create({
	baseURL: 'api.frankfurter.app',
});

export class ExchangeService {
	static async fetchСurrencies() {
		const response = await axios.get('https://api.frankfurter.app/currencies');
		return response.data;
	}

	static async convertCurrency(amount: number, from: string, to: string) {
		const response = await axios.get(
			`https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
		);
		return response.data;
	}

	static async exchangeRates(from: string) {
		const response = await axios.get(`https://api.frankfurter.app/latest?from=${from}`);
		return response.data;
	}
}
