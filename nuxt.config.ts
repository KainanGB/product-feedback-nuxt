// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	pages: true,
	modules: [
		"@pinia/nuxt",
		"@formkit/nuxt",
		"nuxt-quasar-ui",
		"@nuxt/devtools",
		"@nuxt/image",
		"@nuxtjs/google-fonts",
		"nuxt-icon",
	],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "/public/assets/scss/main.scss" as *;',
				},
			},
		},
	},
	quasar: {
		plugins: ["Loading", "Notify"],
		extras: { font: null, animations: "all" },
	},
	appConfig: {
		nuxtIcon: {
			size: "24px", // default <Icon> size applied
			class: "icon", // default <Icon> class applied
			aliases: {
				nuxt: "logos:nuxt-icon",
				up: "uil:angle-up",
				down: "uil:angle-down",
			},
		},
	},

	googleFonts: {
		families: {
			Jost: {
				wght: [400, 500, 600, 700],
			},
		},
	},
	pinia: {
		autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
	},
	alias: {
		"@": "/<rootDir>",
	},
});
