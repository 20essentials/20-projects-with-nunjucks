// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  build: {
    assets: 'static'
  },
  //Deploy
  base: '/project-000-948/',
  site: 'https://20essentials.github.io/project-000-948/'

  //Localhost
  // base: '.',
  // site: 'http://localhost:4444/',
  // server: {
  //   host: true,
  //   port: 4444
  // }
});
