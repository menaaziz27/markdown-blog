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

	mutations: {
		SET_AUTHENTICATED(state, isAuthenticated) {
			state.isAuthenticated = isAuthenticated;
		},

		SET_USER(state, user) {
			state.user = user;
		},
	},

	// action creators
	actions: {
		async authenticate({ commit }) {
			return await axios
				.get('/api/user')
				.then(response => {
					commit('SET_AUTHENTICATED', true);
					commit('SET_USER', response.data);
				})
				.catch(e => {
					commit('SET_AUTHENTICATED', false);
					commit('SET_USER', null);
				});
		},

		async login({ dispatch }, credentials) {
			await axios.get('/sanctum/csrf-cookie').then(async () => {
				await axios.post('/login', credentials);

				//  we dispatch an action if we wanna update the state
				dispatch('authenticate');
			});
		},
	},
});
