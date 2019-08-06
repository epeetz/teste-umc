<template>
	<div class="container mb-3">
		<div class="d-flex mb-3">
			<div class="mr-auto">
				<h3>Repositories by {{ reformattedSearchString }}</h3>
			</div>
		</div>
		<div class="card-columns">
			<div class="card" v-bind:key="repo.id" v-for="repo in repos">
				<div>
					<div class="card-body">
						<h5 class="card-title">
							<a
							:href="repo.html_url"
							class="card-link"
							target="_blank">{{ repo.name }}</a>
						</h5>
						<h6 class="card-subtitle mb-2 text-muted" >{{ repo.created_at | formatDate }}</h6>
						<p class="card-text">{{ repo.description }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'Repos',
	props: ['repos','reformattedSearchString']
};
</script>

<style scoped>
button:focus {
	box-shadow: none !important;
}
</style>