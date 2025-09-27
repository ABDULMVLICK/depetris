import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // permet d'écouter toutes les IP
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '2a483af783cd.ngrok-free.app', // ton host ngrok
      '0b628ce55c3c.ngrok-free.app'
    ]
  }
})
