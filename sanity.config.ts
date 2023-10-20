import { defineConfig } from "sanity"
import { schemaTypes } from "./schemas"
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision"
import { markdownSchema } from "sanity-plugin-markdown"

export default defineConfig({
	name: "default",
	title: "root-website-cms",

	projectId: "hhcee8on",
	dataset: "dev",

	plugins: [deskTool(), visionTool(), markdownSchema()],

	schema: {
		types: schemaTypes,
	},
})
