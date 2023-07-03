<template>
	<q-menu square class="text-primary bg-primary" anchor="bottom end" self="top end">
		<q-list style="width: 300px">
			<div class="list-items">
				<q-item clickable @click="() => emit('toggleMenu')"> All </q-item>
				<q-item clickable> teste </q-item>
				<q-item clickable> teste </q-item>
			</div>

			<q-item clickable @click="() => emit('toggleMenu')">
				<q-item-section>Enhancement</q-item-section></q-item
			>

			<!-- <div>All</div>
					<div>UI</div>
					<div>UX</div>
					<div>Enhancement</div>
					<div>Feature</div>
					<div>Bug</div> -->
			<!-- <q-item clickable @click="() => emit('toggleMenu')">
				<q-item-section>New incognito tab</q-item-section>
			</q-item> -->
		</q-list>
	</q-menu>
</template>

<script lang="ts" setup>
defineProps({
	isMenuOpen: {
		type: Boolean,
	},
});

const emit = defineEmits(["toggleMenu"]);
</script>

<style lang="scss" scoped>
@import "./SideMenuOver.scss";
</style>
