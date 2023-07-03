<template>
	<div class="nav-footer">
		<q-btn-dropdown class="drop-btn" :menu-offset="[8, 20]" size="md" unelevated no-caps>
			<template v-slot:label>
				<div class="text-caption">
					Sort By: <b>{{ selectedOpt }}</b>
				</div>
			</template>
			<q-list>
				<q-item
					class="no-hover"
					clickable
					v-close-popup
					v-for="option in filterOptions"
					@click="selectedOpt = option.name"
				>
					<q-item-section>
						<q-item-label>{{ option.name }}</q-item-label>
					</q-item-section>
				</q-item>
			</q-list>
		</q-btn-dropdown>
		<q-btn label="+ Add feedback" rounded class="feedback-btn" unelevated no-caps></q-btn>
	</div>
</template>

<script setup lang="ts">
const selectedOpt = ref("Most Upvotes");
const filterOptions = ref([
	{
		name: "Most Upvotes",
	},
	{
		name: "Least Upvotes",
	},
	{
		name: "Most Comments",
	},
	{
		name: "Least Comments",
	},
]);
</script>

<style lang="scss" scoped>
@import "./FilterOptionsMenu.scss";
</style>
