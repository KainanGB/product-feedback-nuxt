/// <reference types="vitest" />
import { configDefaults, defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
	plugins: [vue()],
	test: {
		globals: true,
		passWithNoTests: true,
		exclude: [
			...configDefaults.exclude,
			"./husky",
			"./github",
			"./vercel",
			"./public",
			"./server",
			"./node_modules",
		],
		coverage: {
			reportsDirectory: "./tests/unit/coverage",
		},
	},
});
