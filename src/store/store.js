import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import git from './git.js';

export const store = new Vuex.Store({
	modules: {
		git
	},
	state: {
		serverDir: "https://api.github.com/search/repositories",
	},
	getters: {
		getServerDir(state){
			return state.serverDir
		},
	},
	//strict: process.env.NODE_ENV !== 'production'
});

