<template>
	<div>
		<Header @toggleMenu="toggleMenu" :isMenuOpen="isMenuOpen" />
		<div class="container">
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
let isMenuOpen = ref(false);
function toggleMenu(): void {
	isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style lang="scss" scoped>
.container {
	/* background-color: $; */
	padding: 0 2rem;
}
</style>
