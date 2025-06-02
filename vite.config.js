import {defineConfig} from 'vite';
import string from 'vite-plugin-string'; // This handles importing SCSS files as strings

export default defineConfig({
    base: "/micv",
    server: {
        // *** PRODUCTION ONLY COFNIG | DISABLE HMR LOCALLY
        // ==============================================
        // @TODO:: ENABLE / DISABLE HMR FOR DEV / PROD
        // --------------
        // hmr: false,
        // allowedHosts: ["appjoi.online"],
        // ==============================================
    },
    define: {
        'process.env.NODE_ENV': '"production"',
    },
    build: {
        target: 'esnext',
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
