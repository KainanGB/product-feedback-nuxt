<template>
	<transition-group
		appear
		enter-active-class="animated fadeInRight"
		leave-active-class="animated fadeOutRight"
	>
		<div class="side-menu-overlay" key="menu-ov">
			<div class="side-menu-content" key="menu-content">
				<div class="menu-row">
					<div class="menu-col">
						<div>All</div>
						<div>UI</div>
						<div>UX</div>
					</div>
					<div class="menu-col">
						<div>Enhancement</div>
					</div>
					<div class="menu-col">
						<div>Feature</div>
						<div>Bug</div>
					</div>
				</div>

				<div class="menu-row-bottom">
					<div class="menu-left">
						<h3>Roadmap</h3>
						<div>Planned</div>
						<div>In-Progress</div>
						<div>Live</div>
					</div>

					<div class="menu-right">
						<h3>View</h3>
						<div>3</div>
						<div>2</div>
						<div>1</div>
					</div>
				</div>
			</div>
		</div>
	</transition-group>
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
