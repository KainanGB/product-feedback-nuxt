<template>
	<div>
		<nav class="flex justify-between items-center">
			<div>
				<h2 class="text-#fff text-weight-bold">Frontend Mentor</h2>
				<p class="q-ma-none">Feedback Board</p>
			</div>
			<button @click="() => emit('toggleMenu')">
				<CloseIcon v-if="isMenuOpen" />
				<HamburgerIcon v-if="!isMenuOpen" />
			</button>
		</nav>

		<FilterOptionsMenu />
		<SideMenuOverlay v-if="isMenuOpen" @toggleMenu="emit('toggleMenu')" />
	</div>
</template>

<script setup lang="ts">
defineProps({
	isMenuOpen: {
		type: Boolean,
	},
});

const emit = defineEmits(["toggleMenu"]);
</script>

<style lang="scss" scoped>
@import "./Header.scss";
</style>
