import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// base: process.env.MODE == 'staging' ? '/feriado/' : '/', 
// base: import.meta.env.BASE_URL,
// base: process.env.BASE_URL,
// https://vitejs.dev/config/
export default defineConfig({
  base: import.meta.env.BASE_URL,
  plugins: [vue()]
})
