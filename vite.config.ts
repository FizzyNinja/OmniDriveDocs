import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: If your repo is named 'my-project', change this to '/my-project/'
  // If you are using a custom domain (e.g. www.example.com), leave it as '/'
  base: './', 
})