import { defineConfig } from 'astro/config';
import vanillaExtract from "astro-vanilla-extract";
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [vanillaExtract(), partytown(), react(), sitemap(), image()]
});