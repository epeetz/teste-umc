<template>
	<div id="app">
		<Header/>
		<SearchForm v-on:search="search"/>
		<Repos
		v-if="repos.length > 0"
		v-bind:repos="repos"
		v-bind:reformattedSearchString="reformattedSearchString" />
	</div>
</template>

<script>
import Header from './components/Header.vue';
import SearchForm from './components/SearchForm.vue';
import Repos from './components/Repos.vue';
import axios from 'axios';

export default {
	name: 'app',
	components: {
		Header,
		SearchForm,
		Repos
	},
	data() {
		return {
			repos: [],
			reformattedSearchString: '',
			api: {
				baseUrl: 'https://api.github.com/users',
				q: 'epeetz',
				type: 'repos'
			}
		};
	},
	mounted() {
		this.getData('https://api.github.com/users/epeetz/repos');
		this.reformattedSearchString = '[ "epeetz" ]';
	},
	methods: {
		search(searchParams) {
			this.reformattedSearchString = searchParams;
			this.api.q = searchParams;
			const { baseUrl, q, type } = this.api;
			const apiUrl = `${baseUrl}/${q}/${type}`;
			this.getData(apiUrl);
		},
		getData(apiUrl) {
			axios
			.get(apiUrl)
			.then((response) => {
				this.repos = response.data;
			})
			.catch(error => console.log(error));
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
