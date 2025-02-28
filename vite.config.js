import { defineConfig } from 'vite';
import string from 'vite-plugin-string'; // This handles importing SCSS files as strings

export default defineConfig({
    base: process.env.VITE_BASE_URL || "/",
    server: {
        open: true,  // Automatically open browser on server start
        host: true,  // Allow external access for testing
        port: 3000,  // Set the dev server port
    },
    build: {
        target: 'esnext',  // Use modern ES syntax for the build
        outDir: 'dist',
    },
    plugins: [
        string({
            include: '**/*.scss',  // Include all .scss files to be treated as raw strings
        }),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                // Optional: Add any global variables or mixins here if needed
            },
        },
    },
});
