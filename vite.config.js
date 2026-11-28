import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

function videoStreamPlugin() {
  return {
    name: 'video-stream-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const rawUrl = req.url ? req.url.split('?')[0] : '';
        const decodedUrl = decodeURIComponent(rawUrl);
        if (decodedUrl.startsWith('/posters/')) {
          const filePath = path.join(process.cwd(), 'public', decodedUrl);
          if (fs.existsSync(filePath)) {
            const stat = fs.statSync(filePath);
            if (stat.isFile()) {
              res.writeHead(200, {
                'Content-Length': stat.size,
                'Content-Type': 'image/jpeg',
                'Cache-Control': 'public, max-age=31536000',
              });
              fs.createReadStream(filePath).pipe(res);
              return;
            }
          }
        }
        if (decodedUrl.startsWith('/videos/')) {
          const filePath = path.join(process.cwd(), 'public', decodedUrl);
          if (fs.existsSync(filePath)) {
            const stat = fs.statSync(filePath);
            if (stat.isFile()) {
              const fileSize = stat.size;
              const range = req.headers.range;
              const ext = path.extname(filePath).toLowerCase();
              const contentType = (ext === '.mp4') ? 'video/mp4' : 'video/quicktime';

              if (range) {
                const parts = range.replace(/bytes=/, '').split('-');
                const start = parseInt(parts[0], 10);
                const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
                const chunksize = (end - start) + 1;
                const file = fs.createReadStream(filePath, { start, end });
                res.writeHead(206, {
                  'Content-Range': `bytes ${start}-${end}/${fileSize}`,
                  'Accept-Ranges': 'bytes',
                  'Content-Length': chunksize,
                  'Content-Type': contentType,
                });
                file.pipe(res);
                return;
              } else {
                res.writeHead(200, {
                  'Content-Length': fileSize,
                  'Accept-Ranges': 'bytes',
                  'Content-Type': contentType,
                });
                fs.createReadStream(filePath).pipe(res);
                return;
              }
            }
          }
        }
        next();
      });
    }
  };
}

export default defineConfig({
  plugins: [videoStreamPlugin()],
  server: {
    port: 5173,
    watch: {
      ignored: [
        '**/chrome-temp/**',
        '**/dist/**',
        '**/public/videos/**',
        '**/*.png',
        '**/*.jpg',
        '**/*.jpeg',
        '**/*.mp4',
        '**/*.MP4',
        '**/*.mov',
        '**/*.MOV'
      ]
    }
  }
});
