<template>
	<div>Login</div>
</template>

<script>
import { useStore } from 'vuex';
export default {
	setup() {
		const store = useStore();

		store.dispatch('login');
	},
};
</script>
