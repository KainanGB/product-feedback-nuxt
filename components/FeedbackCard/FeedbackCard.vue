<template>
	<div class="feedback-card text-black">
		<h3 class="card-title">Add tags for solutions</h3>
		<p class="card-text">Easier to search for solutions based on a specific stack.</p>
		<button class="card-button">Enhancement</button>
		<div class="card-actions">
			<span class="upvote" :class="isUpvoted ? 'upvoted' : ''" @click="toggleUpvote">
				<Icon class="up-icon" :color="isUpvoted ? 'white' : ''" name="uil:angle-up" />

				112
			</span>
			<span class="comments">
				<Icon class="comments-icon" name="uil:comment" size="18" />
				2
			</span>
		</div>
	</div>
</template>

<script setup>
const isUpvoted = ref(false);

const toggleUpvote = () => (isUpvoted.value = !isUpvoted.value);
</script>

<style lang="scss">
.feedback-card {
	background-color: #fff !important;
	padding: 20px;
	border-radius: 10px;

	.card-title {
		color: $grey-darker;
		font-weight: bold;
	}

	.card-text {
		color: $grey-dark;
		margin: 8px 0 8px 0;
	}

	.card-button {
		background-color: $grey;
		border-radius: 10px;
		color: $blue;
		padding: 6px 15px;
		font-weight: 600;

		transition: all 0.5s;
		&:hover {
			background-color: $grey-hover;
		}
	}

	.card-actions {
		display: flex;
		justify-content: space-between;
		padding: 5px 0;

		margin-top: 8px;

		.upvote,
		.comments {
			color: $grey-darker;
			font-weight: bold;
			padding: 4px 13px;

			border-radius: 8px;
			display: flex;
			align-items: center;
		}

		.upvote {
			cursor: pointer;
			background-color: $grey;

			transition: all 0.5s;

			&:hover {
				background-color: $grey-hover;
			}

			.up-icon {
				color: $blue;
			}
		}

		.upvoted {
			background-color: $blue;
			color: #fff;

			&:hover {
				background-color: $blue;
			}
		}

		.comments {
			.comments-icon {
				color: $grey-dark;
				margin-right: 5px;
			}
		}
	}
}
</style>
