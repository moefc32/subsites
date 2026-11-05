import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import AstroPWA from '@vite-pwa/astro';

export default defineConfig({
    vite: {
        plugins: [
            tailwindcss(),
        ],
        resolve: {
            noExternal: [
                '@lucide/svelte',
                'svelte-sonner',
            ],
        },
    },
    integrations: [
        svelte(),
        AstroPWA(),
        mdx(),
    ],
    server: {
        port: 4002,
    },
});