import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://avantys.github.io/web-nueva', // para GitHub Pages
  base: '/web-nueva',                          // IMPORTANTE para subcarpeta
  // ...
});