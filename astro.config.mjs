import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  image: {
    layout: 'constrained',
    responsiveStyles: true,
  },
  devToolbar: {
    enabled: true,
  },
});
