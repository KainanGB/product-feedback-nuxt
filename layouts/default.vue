<template>
	<Header />
	<main class="container">
		<ul class="cards">
			<li>
				<FeedbackCard />
			</li>
		</ul>
	</main>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.container {
	padding: 0 2rem;
	height: 100dvh;
	.cards {
		margin-top: 30px;
	}
}
</style>
