import { defineConfig } from 'vite'
import vue from '@vue/plugin-vue' // Pastikan plugin ini yang di-import

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/coderoast/', // Tambahkan baris ini!
})
