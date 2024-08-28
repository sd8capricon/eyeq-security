import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // site: "https://eyeqsceurity.ca"
  integrations: [sitemap(),
  sanity({
    projectId: "06moeryx",
    dataset: "production",
    useCdn: false,
    studioBasePath: "/studio"
  }),
  react()]
});