<template>
	<div class="comment">
		<div class="header">
			<div class="avatar">
				<nuxt-img width="50" height="50" src="assets/user-images/image-anne.jpg" />
			</div>
			<div class="author">
				<span>michael-ciniawsky</span>
				<small>@upbeat1811</small>
			</div>
		</div>
		<div class="content">
			<div class="message">
				Please use fun, color-coded labels to easily identify them at a glance
			</div>
		</div>
		<div class="footer">
			<div class="comment">
				<div class="header">
					<div class="avatar">
						<nuxt-img
							width="50"
							height="50"
							src="assets/user-images/image-suzanne.jpg"
						/>
					</div>
					<div class="author">
						<span>Suzanne Chang</span>
						<small>@brawnybrave</small>
					</div>
				</div>
				<div class="content">
					<div class="message">
						<b>@upbeat1811</b> Awesome idea! Trying to find framework-specific projects
						within the hubs can be tedious
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.comment {
	.header {
		display: flex;
		align-items: center;
		gap: 15px;

		color: $grey-darker;

		.author {
			display: flex;
			flex-direction: column;

			span {
				font-weight: bold;
				color: $grey-darker;
			}
		}
	}

	.content {
		color: $grey-dark;
	}

	.footer {
		.content .message b {
			color: $purple;
		}
	}

	.avatar {
		img {
			border-radius: 50% !important;
		}
	}
}
</style>
