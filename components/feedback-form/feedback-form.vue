<template>
	<FormKit type="form" submit-label="Add Feedback">
		<h5>{{ title }}</h5>
		<FormKit
			type="text"
			name="title"
			validation="required"
			label="Feedback Title"
			help="Add a short, descriptive headline"
		/>

		<FormKit
			type="select"
			validation="required"
			label="Category"
			name="category"
			placeholder="category"
			help="Choose a category for your feedback"
			:options="['Feature', 'UI', 'UX', 'Enhancement', 'Bug']"
		/>

		<FormKit
			type="select"
			validation="required"
			label="Update Status"
			name="status"
			placeholder="suggestion"
			help="Change feature state"
			:options="['Suggestion', 'Planned', 'In-Progress', 'Live']"
			v-if="isEdit"
		/>

		<FormKit
			type="textarea"
			validation="required"
			label="Feedback Detail"
			help="Include any specific comments on what should be improved, added, etc."
			maxLength="100"
		/>
	</FormKit>
	<button type="button">Cancel</button>
	<button v-if="isEdit" type="button">Delete</button>
</template>

<script setup lang="ts">
interface IProps {
	isEdit: boolean;
}
const props = defineProps<IProps>();

const title = computed(() =>
	props.isEdit ? "Editing 'Add tags for solutions'" : "Create New Feedback"
);

console.log(props.isEdit);
</script>
