import { createStore } from 'vuex';

export default createStore({
	state() {
		return {
			isAuthenticated: false,
			user: null,
		};
	},

	getters: {
		isAuthenticated(state) {
			return state.isAuthenticated;
		},

		user(state) {
			return state.user;
		},
	},
});
