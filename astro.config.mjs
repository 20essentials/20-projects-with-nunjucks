// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  build: {
    assets: 'static'
  },
  //Deploy
  base: '/20-projects-with-nunjucks/',
  site: 'https://20essentials.github.io/20-projects-with-nunjucks/'

  //Localhost
  // base: '.',
  // site: 'http://localhost:4444/',
  // server: {
  //   host: true,
  //   port: 4444
  // }
});
