<template>
	<div>
		<nav class="flex justify-between items-center">
			<div>
				<h2 class="text-#fff text-weight-bold">Frontend Mentor</h2>
				<p class="q-ma-none">Feedback Board</p>
			</div>
			<button @click="toggleMenu">
				<Icon name="ci:hamburger-md" size="35" color="white" v-if="!isMenuOpen" />
				<Icon name="material-symbols:close" size="35" color="white" v-if="isMenuOpen" />
			</button>
		</nav>

		<FilterOptionsMenu />

		<SideMenuOverlay v-if="isMenuOpen" @toggleMenu="toggleMenu" />
	</div>
</template>

<script setup lang="ts">
let isMenuOpen = ref<boolean>(false);
function toggleMenu(): void {
	isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style lang="scss" scoped>
@import "./Header.scss";
</style>
