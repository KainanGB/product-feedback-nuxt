// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@pinia/nuxt", "nuxt-quasar-ui"],
	quasar: {
		plugins: ["Loading", "Notify"],
		extras: {
			font: "roboto-font",
		},
	},
	pinia: {
		autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
	},
});
