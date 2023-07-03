<template>
	<div>
		<Header @toggleMenu="toggleMenu" :isMenuOpen="isMenuOpen" />
		<slot />
	</div>
</template>

<script setup lang="ts">
let isMenuOpen = ref(false);
function toggleMenu(): void {
	isMenuOpen.value = !isMenuOpen.value;
}
</script>
