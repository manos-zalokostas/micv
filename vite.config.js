import {defineConfig} from 'vite';
import string from 'vite-plugin-string'; // This handles importing SCSS files as strings

export default defineConfig({
    base: "/micv",
    server: {
        hmr: false,
        allowedHosts: ["appjoi.com"],

    },
    define: {
        'process.env.NODE_ENV': '"production"',
    },
    build: {
        target: 'esnext',  // Use modern ES syntax for the build
        outDir: 'dist',
    },
    plugins: [
        string({
            // include: '**/*.scss',  // Include all .scss files to be treated as raw strings
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
