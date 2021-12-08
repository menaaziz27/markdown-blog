import axios from 'axios';
import { ref } from '@vue/reactivity';

export default function useAdminPosts() {
	let posts = ref([]);

	const fetchPosts = async () => {
		const { data } = await axios.get('/api/admin/posts');
		posts.value = data.data;
	};

	return {
		posts,
		fetchPosts,
	};
}
