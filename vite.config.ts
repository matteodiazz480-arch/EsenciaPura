import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

function serveImagenesPlugin(): Plugin {
  return {
    name: 'serve-imagenes',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.startsWith('/imagenes/')) {
          const filePath = path.join(process.cwd(), decodeURIComponent(req.url.split('?')[0]))
          if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            res.setHeader('Content-Type', 'image/jpeg')
            fs.createReadStream(filePath).pipe(res)
            return
          }
        }
        next()
      })
    },
    closeBundle() {
      const srcDir = path.join(process.cwd(), 'imagenes')
      const destDir = path.join(process.cwd(), 'dist', 'imagenes')
      if (fs.existsSync(srcDir)) {
        fs.cpSync(srcDir, destDir, { recursive: true })
      }
    }
  }
}

export default defineConfig({
  plugins: [react(), serveImagenesPlugin()],
})
