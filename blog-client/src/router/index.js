import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/Home.vue';
import Post from '../pages/Post.vue';
import Login from '../pages/Login.vue';
import Posts from '../pages/admin/Posts.vue';
import store from '../store';

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/admin/login',
		name: 'admin.login',
		component: Login,
	},
	{
		path: '/admin/posts',
		name: 'admin.posts',
		component: Posts,
		beforeEnter: (to, from, next) => {
			if (!store.getters.isAuthenticated) {
				return next({ name: 'admin.login' });
			}
			return next();
		},
	},
	{
		path: '/posts/:slug',
		name: 'post',
		component: Post,
		props: true,
	},
];

export default createRouter({
	history: createWebHistory(),
	routes,
});
