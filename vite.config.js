import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        thankyou: 'thank-you.html',
        careThankyou: 'thank-you-care-request-7k3m92/index.html',
        jobThankyou: 'job-application-received-4p8x21/index.html',
      },
    },
    minify: 'terser',
    cssMinify: 'lightningcss',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
});
