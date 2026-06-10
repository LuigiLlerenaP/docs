// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    starlight({
      title: 'Documentos',
      customCss: [
        '@fontsource/ibm-plex-serif/400.css',
        '@fontsource/ibm-plex-serif/600.css',
      ],
    }),
  ],
});