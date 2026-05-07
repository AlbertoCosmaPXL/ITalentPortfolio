import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// For GitHub Pages project sites, set base to '/<repo-name>/'.
// If you deploy to <user>.github.io (a user/organization site), use '/'.
export default defineConfig({
  plugins: [vue()],
  base: '/',
})
