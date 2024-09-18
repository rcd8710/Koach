import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Koach/', // Add this line
  server: {
    port: 3005, // Change this to your desired port number
  },
})
