import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify/edge-functions';
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: netlify({})
});