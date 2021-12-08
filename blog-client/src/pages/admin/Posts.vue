<template>
	<div class="space-y-16">
		<button
			class="
				inline-flex
				items-center
				bg-blue-600
				px-4
				py-2
				border border-transparent
				text-sm
				font-medium
				rounded-md
				shadow-sm
				text-white
			"
		>
			New Post
		</button>
		<div v-for="post in posts" :key="post.uuid">
			<!-- each post -->
			<div
				class="
					flex
					items-baseline
					sm:justify-between
					flex-wrap
					sm:flex-nowrap
					space-x-0
					sm:space-x-6
					space-y-3
					sm:space-y-0
				"
			>
				<p class="text-xl font-bold tracking-tight text-gray-900">{{ post.title }}</p>
				<div class="flex items-center space-x-6 flex-wrap sm:flex-nowrap">
					<p class="text-base text-gray-500">
						<span
							class="
								inline-flex
								items-center
								px-4
								py-2
								border border-transparent
								text-sm
								font-medium
								rounded-md
								shadow-sm
								text-black
							"
							:class="{ 'bg-green-100': post.published, 'bg-gray-200': !post.published }"
							>{{ !post.published ? 'Unpublished' : 'Published' }}</span
						>
					</p>
					<div>
						<!-- edit -->
						<router-link to="/" class="text-sm font-medium">Edit</router-link>
					</div>
					<div>
						<!-- /delete -->
						<button class="text-sm font-medium">Delete</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import useAdminPosts from '../../api/useAdminPosts';
import { onMounted } from 'vue';

export default {
	setup() {
		const { posts, fetchPosts } = useAdminPosts();

		onMounted(fetchPosts);

		return {
			posts,
		};
	},
};
</script>
