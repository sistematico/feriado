import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// publicPath: process.env.NODE_ENV  ===  'production'  ?  './'  :  '/',
// base: process.env.MODE == 'staging' ? '/feriado/' : '/', 
// base: import.meta.env.BASE_URL,
// base: process.env.BASE_URL,
// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/' : '/feriado/',
  publicPath: process.env.NODE_ENV === 'production' ? 'public' : 'dist',
  plugins: [vue()]
})
