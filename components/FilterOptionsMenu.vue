<template>
	<div class="filter-options">
		<div class="filter-button" @click="onToggleOptions">
			<p>
				Sort By: <b>{{ selectedOpt }}</b>
			</p>
			<Icon class="icon" :name="toggleOptions ? 'down' : 'up'" size="23" />
		</div>
		<transition-group
			appear
			enter-active-class="animated fadeIn"
			leave-active-class="animated fadeOut"
		>
			<ul class="dropdown-menu" v-show="toggleOptions" key="dropdown-menu">
				<li v-for="option in filterOptions" @click="setSelectOption(option.name)">
					{{ option.name }}
					<Icon
						v-show="selectedOpt === option.name"
						class="check-icon"
						name="uil:check"
						size="23"
					/>
				</li>
			</ul>
		</transition-group>
		<NuxtLink to="/new-feedback">
			<button class="feedback-btn">+ Add feedback</button>
		</NuxtLink>
	</div>
</template>

<script setup lang="ts">
const toggleOptions = ref(false);

function onToggleOptions(): void {
	toggleOptions.value = !toggleOptions.value;
}

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

function setSelectOption(option: string): void {
	selectedOpt.value = option;
	toggleOptions.value = false;
}
</script>

<style lang="scss" scoped>
@import "./FilterOptionsMenu.scss";
</style>
