<template>
	<div class="space-y-16">
		<div v-for="post in posts" :key="post.uuid">
			<router-link :to="{ name: 'post', params: { slug: post.slug } }" class="block">
				<h1 class="text-3xl sm:text-4xl leading-10 font-extrabold tracking-tight text-gray-900">
					{{ post.title }}
					<p class="mt-6 text-gray-500">abc</p>
				</h1>
			</router-link>
		</div>
	</div>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
import usePosts from '../api/usePosts';
import { useStore } from 'vuex';

export default {
	setup() {
		const { posts, fetechPosts } = usePosts();

		// to access the useSelectors in the store
		const store = useStore();
		console.log(store.getters.isAuthenticated);
		onMounted(fetechPosts);

		return {
			posts,
		};
	},
};
</script>
