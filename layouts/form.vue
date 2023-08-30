<template>
	<div>
		<NuxtLink to="/" class="go-back-btn">
			<nuxt-img src="assets/shared/icon-arrow-left.svg" />
			Go Back
		</NuxtLink>

		<div class="form">
			<FormKit
				type="form"
				submit-label="Save Changes"
				:plugins="[zodPlugin]"
				@submit="submitHandler"
			>
				<nuxt-img src="assets/shared/icon-edit-feedback.svg" class="icon" v-if="isEdit" />
				<nuxt-img src="assets/shared/icon-new-feedback.svg" class="icon" v-if="!isEdit" />

				<h6 class="title">{{ title }}</h6>
				<FormKit
					type="text"
					name="title"
					validation="required|length:3,15"
					label="Feedback Title"
					help="Add a short, descriptive headline"
				/>

				<FormKit
					type="select"
					validation="required"
					label="Category"
					name="category"
					help="Choose a category for your feedback"
					:options="['Feature', 'UI', 'UX', 'Enhancement', 'Bug']"
				/>

				<FormKit
					type="select"
					:validation="isStatusRequired"
					label="Update Status"
					name="status"
					help="Change feature state"
					:options="['Suggestion', 'Planned', 'In-Progress', 'Live']"
					v-if="isEdit"
				/>

				<FormKit
					type="textarea"
					validation="required|length:0,100"
					label="Feedback Detail"
					name="detail"
					help="Include any specific comments on what should be improved, added, etc."
					maxLength="100"
				/>
			</FormKit>
			<button type="button" class="cancel-btn">Cancel</button>
			<button v-if="isEdit" type="button" class="delete-btn">Delete</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { createZodPlugin } from "@formkit/zod";
import { z } from "zod";

const route = useRoute();
const isEdit = computed(() => !!route.params.id);
const title = computed(() =>
	isEdit.value ? "Editing 'Add tags for solutions'" : "Create New Feedback"
);

const isStatusRequired = computed(() => (!isEdit.value ? "required|?" : "required|"));

const zodSchema = z.object({
	title: z.string().max(15),
	category: z.enum(["Feature", "UI", "UX", "Enhancement", "Bug"]),
	status: z.enum(["Suggestion", "Planned", "In-Progress", "Live"]).optional(),
	detail: z.string().max(100),
});

const [zodPlugin, submitHandler] = createZodPlugin(zodSchema, async (formData) => {
	// fake submit handler, but this is where you
	// do something with your valid data.
	await new Promise((r) => setTimeout(r, 2000));
	alert("Form was submitted!");
	console.log(formData);
});
</script>

<style lang="scss">
div {
	.go-back-btn {
		display: flex;
		align-items: center;
		margin: 30px 0 50px 30px;
		color: $grey-dark;
		font-weight: bold;

		img {
			margin-right: 20px;
		}
	}
	.form {
		position: relative;
		border-radius: 10px;
		background-color: #fff;
		color: $grey-darker;
		margin: 30px;
		padding: 35px 30px;

		.icon {
			position: absolute;
			top: -20px;
			width: 40px;
		}

		.formkit-form {
			.title {
				margin-top: 15px;
				margin-bottom: 20px;
				font-weight: bold;
			}

			.formkit-outer:not(:last-child) {
				margin-bottom: 15px;

				.formkit-wrapper {
					margin: 25px 0 5px 0;
					.formkit-label {
						font-weight: 600;
					}

					select {
						cursor: pointer;
					}

					.formkit-inner {
						.formkit-input {
							border: none;
							color: $grey-darker;
							background-color: $grey-light;
							border-radius: 10px;
							padding: 10px 15px;
							width: 100%;
							border: 1px solid transparent;

							margin: 10px 0 0 0;

							transition: all 0.5s;

							&:hover {
								border: 1px solid $blue;
							}
							&:focus {
								outline: 1px solid $blue;
							}
						}
					}
				}
			}
			.formkit-help,
			.formkit-messages {
				color: $grey-dark;
			}

			[data-invalid] .formkit-messages {
				color: red;
				font-weight: bolder;
				margin: 10px 0;
			}

			.formkit-messages {
				li {
					margin: 10px 0;
					color: red;
					font-weight: bolder;
				}
			}

			.formkit-actions {
				margin-bottom: 15px;
			}

			// submit
			button {
				margin-top: 15px;
				padding: 12px 30px;
				color: #fff;
				background-color: $purple;
				font-weight: 600;
				border-radius: 10px;
				width: 100%;
			}
		}

		.cancel-btn,
		.delete-btn {
			padding: 12px 30px;
			color: #fff;
			width: 100%;
			border-radius: 10px;
			margin-bottom: 15px;
			font-weight: 600;
		}

		.cancel-btn {
			background-color: $grey-darker;
		}

		.delete-btn {
			background-color: $red;
		}
	}
}
</style>
