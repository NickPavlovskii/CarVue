import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
  // Добавим эту секцию, чтобы TypeScript знал о глобальной переменной jQuery
  optimizeDeps: {
    include: ['jquery'],
  },
});
