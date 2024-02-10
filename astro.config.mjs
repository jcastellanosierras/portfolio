import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://josecastellano.dev',
  integrations: [sitemap(), mdx()],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    }
  })
});