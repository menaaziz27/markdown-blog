import axios from 'axios';
import { ref } from '@vue/reactivity';

export default function usePosts() {
	let posts = ref([]);
	let post = ref(null);

	const fetchPosts = async () => {
		const { data } = await axios.get('/api/posts');
		posts.value = data.data;
	};

	const fetchPost = async slug => {
		const { data } = await axios.get(`/api/posts/${slug}`);
		post.value = data.data;
	};

	return {
		posts,
		fetchPosts,
		post,
		fetchPost,
	};
}
