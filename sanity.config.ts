import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

const sanityConfig = {
  name: "portfolio",
  title: "Portfolio",
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID!,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET!,
  plugins: [structureTool(), visionTool()],
  schema: {},
};

export default defineConfig(sanityConfig);
