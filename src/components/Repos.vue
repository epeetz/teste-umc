<template>
	<b-container fluid>
		<h1>Repositories of {{user}}</h1>
		<b-row>
			<b-table striped hover responsive :items="infos" :fields="fields">
				<template slot="index" slot-scope="infos">{{ infos.index + 1 }}</template>
				<template slot="full_name" slot-scope="infos"><strong>{{ infos.item.full_name }}</strong></template>
				<template slot="url" slot-scope="infos">{{ infos.item.url }}</template>
				<template slot="created_at" slot-scope="infos">{{ infos.item.created_at | formatDate }}</template>
			</b-table>
		</b-row>
	</b-container>
</template>

<script>
import axios from 'axios'

export default {
	name: 'Repos',
	data() {
		return {
			fields: ['index', 'full_name', 'url', 'created_at'],
			infos: null,
			user: null
		}
	},
	mounted() {
		axios.get('https://api.github.com/users/epeetz/repos')
		.then(response => (this.infos = response.data,this.user = response.data[0].owner.login))
	},
}
</script>