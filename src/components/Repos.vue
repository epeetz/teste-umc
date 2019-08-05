<template>
<div>
<h1>Repos ()</h1>


<table class="table table-bordered table-hover">

<thead>

<tr>

<th>#</th>

<th>Full Name</th>
<th>URL</th>
<th>Created at</th>
</tr>
</thead>
<tbody>
<tr v-for="info in infos">

<th></th>

<th>{{info.full_name}}</th>

<td>{{info.url}}</td>

<td>{{info.created_at}}</td>
</tr>
</tbody>
</table>
<div>
</div>
</div>

</template>

<script>
import axios from 'axios';

export default {
	name: 'Repos',
	data() {
		return {
			infos: null
		}
	},
	mounted() {
		axios.get('https://api.github.com/users/epeetz/repos')
		.then(response => (this.infos = response.data))
	},
}
</script>