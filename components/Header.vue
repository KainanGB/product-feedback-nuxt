<template>
	<div>
		<nav class="flex justify-between items-center">
			<div>
				<h2 class="text-#fff">Frontend Mentor</h2>
				<p class="q-ma-none">Feedback Board</p>
			</div>
			<button @click="isMenuOpen = !isMenuOpen">
				<CloseIcon v-if="isMenuOpen" />
				<HamburgerIcon v-if="!isMenuOpen" />
			</button>
		</nav>

		<div class="nav-footer">
			<p>sort by:</p>
			<button>+ Add feedback</button>
		</div>
	</div>
</template>

<script setup lang="ts">
let isMenuOpen = ref(false);
</script>

<style lang="scss">
nav {
	background: $radial-gradient;
	padding: 1rem 2rem;

	div {
		h2 {
			color: #fff;
			font-weight: 500;
		}
		color: $grey-75;
	}
}

.nav-footer {
	padding: 0.5rem 2rem;
	display: flex;
	justify-content: space-between;
	background-color: $grey-darkest;
	color: #fff;

	button {
		color: #fff;
		background-color: $purple;
		border-radius: 0.25rem;
		font-weight: 500;
		padding: 0 1rem;
	}
}
</style>
