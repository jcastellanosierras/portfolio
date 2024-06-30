import { defineConfig, squooshImageService } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";
import { sanityIntegration } from "@sanity/astro";
import { configDotenv } from "dotenv";

configDotenv();

// https://astro.build/config
export default defineConfig({
  site: "https://josecastellano.dev",
  integrations: [
    sitemap(),
    mdx(),
    react(),
    sanityIntegration({
      projectId: process.env.SANITY_API_PROJECT_ID,
      dataset: process.env.SANITY_API_DATASET,
      useCdn: false,
      studioBasePath: "/studio",
    }),
  ],
  output: "hybrid",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    maxDuration: 8,
  }),
  image: {
    service: squooshImageService()
  }
});
