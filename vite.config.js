import { defineConfig } from 'vite';
import { resolve } from 'path';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig({
  base: '/goit-js-hw-10/',

  root: 'src',

  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        timer: resolve(__dirname, 'src/1-timer.html'),
        snackbar: resolve(__dirname, 'src/2-snackbar.html'),
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        assetFileNames: 'assets/[name]-[hash][extname]',
        entryFileNames: '[name].js',
      },
    },
  },

  plugins: [
    injectHTML(),
    FullReload(['./src/**/*.html']),
    SortCss({
      sort: 'mobile-first',
    }),
  ],
});
