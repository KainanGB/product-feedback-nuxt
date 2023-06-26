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
	},
	googleFonts: {
		families: {
			Jost: true,
			Roboto: true,
			"Josefin+Sans": true,
		},
		display: "swap",
		prefetch: true,
	},
	pinia: {
		autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
	},
	alias: {
		"@": "/<rootDir>",
	},
});
