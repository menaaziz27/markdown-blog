import axios from 'axios';
import { ref } from '@vue/reactivity';

export default function usePosts() {
	let posts = ref([]);

	const fetechPosts = async () => {
		const { data } = await axios.get('/api/posts');
		posts.value = data.data;
		console.log(posts);
	};

	return {
		posts,
		fetechPosts,
	};
}
