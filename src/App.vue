<template>
	<div id="app">
		<Repos/>
	</div>
</template>

<script>

import Repos from './components/Repos.vue'

export default {
	name: 'app',
	components: {
		Repos
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
	margin-top: 60px;
}
</style>
