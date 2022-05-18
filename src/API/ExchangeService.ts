import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://api.frankfurter.app/',
});

export class ExchangeService {
	static async fetchСurrencies() {
		const response = await instance.get('currencies');
		return response.data;
	}

	static async convertCurrency(amount: number, from: string, to: string) {
		const response = await instance.get(`latest?amount=${amount}&from=${from}&to=${to}`);
		return response.data;
	}

	static async exchangeRates(from: string) {
		const response = await instance.get(`/latest?from=${from}`);
		return response.data;
	}
}
