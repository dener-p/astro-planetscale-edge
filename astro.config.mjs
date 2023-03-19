import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';

// https://astro.build/config
import vercel from '@astrojs/vercel/edge';
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: vercel()
});