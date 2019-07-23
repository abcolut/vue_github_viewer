import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import VueResource from 'vue-resource'
Vue.use(VueResource);

export default {
	namespaced: true,
	state: {
		git:{}
	},
	getters: {
		getGit(state){
			return state.git
		},
	},
	mutations:{
		setGit(state, data){
			state.git = data;
		}
	},
	actions:{
		getGit(state,data){
			var serverDir = this.getters["getServerDir"];
			var searchString = encodeURIComponent(data.searchString)			
			Vue.http.get( serverDir + "?q=" + searchString, {})
					.then(response => {
						return response.json()						
					}
					)
					.then(data => {
						state.commit('setGit', data)
					}, response => {
						//console.error("!!! ERROR getGit()", response);
				});
		},
	}
}
