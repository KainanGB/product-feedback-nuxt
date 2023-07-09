<template>
	<div class="wrapper">
		<div class="header-actions">
			<NuxtLink to="/" class="go-back-btn">
				<nuxt-img src="assets/shared/icon-arrow-left.svg" />
				Go Back
			</NuxtLink>

			<NuxtLink to="/" class="go-edit-btn">
				<nuxt-img src="assets/shared/icon-arrow-left.svg" />
				Edit Feedback
			</NuxtLink>
		</div>

		<div class="cards">
			<FeedbackCard />

			<div class="comments">
				<h7>4 Comments</h7>

				<feedback-comment-card />
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss">
.wrapper {
	padding: 0 2rem;
	margin-top: 2rem;
	.header-actions {
		display: flex;
		align-items: center;
		justify-content: space-between;
		.go-back-btn {
			display: flex;
			align-items: center;
			color: $grey-dark;
			font-weight: bold;

			img {
				margin-right: 20px;
			}

			&:hover {
				text-decoration: underline;
			}
		}

		.go-edit-btn {
			padding: 12px 20px;
			background-color: $blue;
			color: #ffff;
			border-radius: 10px;
			font-weight: bold;

			transition: all 1s;

			&:hover {
				filter: brightness(95%);
			}
		}
	}
}
</style>
