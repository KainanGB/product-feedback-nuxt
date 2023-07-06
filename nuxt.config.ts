// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	pages: true,
	modules: [
		"@pinia/nuxt",
		"nuxt-quasar-ui",
		"@nuxt/devtools",
		"@nuxt/image",
		"@nuxtjs/google-fonts",
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
	googleFonts: {
		families: {
			Jost: true,
		},
	},
	pinia: {
		autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
	},
	alias: {
		"@": "/<rootDir>",
	},
});
