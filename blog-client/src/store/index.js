import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
	state() {
		return {
			// initial data
			isAuthenticated: false,
			user: null,
		};
	},

	getters: {
		// like useSelectors in React
		isAuthenticated(state) {
			return state.isAuthenticated;
		},

		user(state) {
			return state.user;
		},
	},

	actions: {
		async login(_, credentials) {
			await axios.get('/sanctum/csrf-cookie').then(() => {
				// dispatch login
			});
		},
	},
});
