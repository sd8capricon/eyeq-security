// astro
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// sanity
import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://eyeqsceurity.ca",
  integrations: [
    sitemap(),
    sanity({
      projectId: "06moeryx",
      dataset: "production",
      useCdn: false,
      studioBasePath: "/studio"
    }),
    react()
  ]
});