<template>
	<div class="max-w-md mx-auto w-full">
		{{ errors }}
		<form v-on:submit.prevent="attemptLogin">
			<div class="rounded-md shadow-sm space-y-4">
				<div>
					<label for="email" class="block text-sm font-medium text-gray-700">Email</label>
					<div class="mt-1">
						<input
							type="text"
							name="email"
							id="email"
							class="
								shadow-sm
								block
								w-full
								sm:text-sm
								rounded-md
								border-gray-300
								focus:ring-indigo-500 focus:border-indigo-500
							"
							v-model="form.email"
						/>

						<p class="mt-2 text-sm text-red-500" v-if="errors.email">
							{{ errors.email[0] }}
						</p>
					</div>
				</div>
				<div>
					<label for="passowrd" class="block text-sm font-medium text-gray-700">Password</label>
					<div class="mt-1">
						<input
							type="password"
							name="password"
							id="password"
							class="
								shadow-sm
								block
								w-full
								sm:text-sm
								rounded-md
								border-gray-300
								focus:ring-indigo-500 focus:border-indigo-500
							"
							v-model="form.password"
						/>
						<p class="mt-2 text-sm text-red-500" v-if="errors.password">
							{{ errors.password[0] }}
						</p>
					</div>
				</div>
				<div>
					<button
						type="submit"
						class="
							block
							bg-blue-400
							hover:bg-blue-600
							transition
							duration-500
							w-full
							py-2
							px-4
							rounded-md
						"
					>
						Sign In
					</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
import { useStore } from 'vuex';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
	setup() {
		const store = useStore();
		const router = useRouter();

		const form = reactive({
			email: '',
			password: '',
		});

		let errors = ref({});

		const attemptLogin = () => {
			store
				.dispatch('login', form)
				.then(() => {
					router.replace({ name: 'admin.posts' });
				})
				.catch(e => {
					if (e.response.status === 422) {
						errors.value = e.response.data.errors;
					}
				});
		};
		return {
			attemptLogin,
			form,
			errors,
		};
	},
};
</script>
