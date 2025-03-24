// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { SITE_URL } from './src/consts';
import sitemap from '@astrojs/sitemap';
//import node from '@astrojs/node';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // site: 'https://example.com',
  // integrations: [mdx(), sitemap()],
  site: SITE_URL,
  integrations: [mdx(), sitemap()],
  output: 'server',
  adapter: vercel(),
  // adapter: node({
  //   mode: 'standalone',
  // }),
});