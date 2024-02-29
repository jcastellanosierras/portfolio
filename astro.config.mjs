import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/static";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://josecastellano.dev',
  integrations: [sitemap(), mdx(), react()],
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});