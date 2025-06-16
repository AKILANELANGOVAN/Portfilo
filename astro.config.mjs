// // @ts-check
// import { defineConfig } from 'astro/config';
// import tailwindcss from "@tailwindcss/vite";

// import react from "@astrojs/react";

// // https://astro.build/config
// export default defineConfig({
//   vite: {
//       plugins: [tailwindcss()],
//   },

//   integrations: [react()]
// });
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": "/src" // ✅ This enables @/components, @/lib, etc.
      }
    }
  }
});
