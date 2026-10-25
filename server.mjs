import http from 'http';
import fs from 'fs';
import path from 'path';
import net from 'net';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.eot': 'application/vnd.ms-fontobject',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
};

function rewriteContent(content) {
  if (typeof content !== 'string') return content;
  
  return content
    .replaceAll('https://tillysveaas.co.uk/', '/')
    .replaceAll('http://tillysveaas.co.uk/', '/')
    .replaceAll('//tillysveaas.co.uk/', '/')
    .replaceAll('https://cdn.shopify.com/', '/cdn.shopify.com/')
    .replaceAll('http://cdn.shopify.com/', '/cdn.shopify.com/')
    .replaceAll('//cdn.shopify.com/', '/cdn.shopify.com/')
    .replaceAll('https://fonts.googleapis.com/', '/fonts.googleapis.com/')
    .replaceAll('//fonts.googleapis.com/', '/fonts.googleapis.com/')
    .replaceAll('https://fonts.gstatic.com/', '/fonts.gstatic.com/')
    .replaceAll('//fonts.gstatic.com/', '/fonts.gstatic.com/')
    .replaceAll('https://cdn-widgetsrepository.yotpo.com/', '/cdn-widgetsrepository.yotpo.com/')
    .replaceAll('//cdn-widgetsrepository.yotpo.com/', '/cdn-widgetsrepository.yotpo.com/')
    .replaceAll('https://a.klaviyo.com/', '/a.klaviyo.com/')
    .replaceAll('//a.klaviyo.com/', '/a.klaviyo.com/')
    .replaceAll('https://shopify.com/', '/shopify.com/')
    .replaceAll('http://shopify.com/', '/shopify.com/')
    .replaceAll('//shopify.com/', '/shopify.com/')
    .replaceAll('https://shop.app/', '/shop.app/')
    .replaceAll('http://shop.app/', '/shop.app/')
    .replaceAll('//shop.app/', '/shop.app/');
}

function findFile(cleanPath) {
  const candidates = [
    cleanPath,
    path.join('tillysveaas.co.uk', cleanPath),
    cleanPath + '.html',
    path.join('tillysveaas.co.uk', cleanPath + '.html'),
    path.join(cleanPath, 'index.html'),
    path.join('tillysveaas.co.uk', cleanPath, 'index.html'),
  ];

  for (const candidate of candidates) {
    const fullPath = path.join(ROOT_DIR, candidate);
    try {
      if (fs.existsSync(fullPath)) {
        const stat = fs.statSync(fullPath);
        if (stat.isFile()) {
          return fullPath;
        } else if (stat.isDirectory()) {
          const indexHtml = path.join(fullPath, 'index.html');
          if (fs.existsSync(indexHtml) && fs.statSync(indexHtml).isFile()) {
            return indexHtml;
          }
        }
      }
    } catch {
      // ignore
    }
  }

  return null;
}

function checkPort(port) {
  return new Promise((resolve) => {
    const tester = net.createServer()
      .once('error', () => resolve(false))
      .once('listening', () => {
        tester.close(() => resolve(true));
      })
      .listen(port, '0.0.0.0');
  });
}

async function getAvailablePort(startPort) {
  let port = startPort;
  while (!(await checkPort(port))) {
    port++;
  }
  return port;
}

async function main() {
  const startPort = parseInt(process.env.PORT || '3000', 10);
  const port = await getAvailablePort(startPort);

  const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', '*');

    if (req.method === 'OPTIONS') {
      res.writeHead(204);
      res.end();
      return;
    }

    try {
      const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
      let reqPath = decodeURIComponent(parsedUrl.pathname);

      if (reqPath === '/' || reqPath === '') {
        reqPath = '/tillysveaas.co.uk/index.html';
      }

      const cleanPath = reqPath.startsWith('/') ? reqPath.slice(1) : reqPath;
      const filePath = findFile(cleanPath);

      if (!filePath) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(`404 Not Found: ${req.url}`);
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';

      if (contentType.startsWith('text/') || contentType.includes('javascript') || contentType.includes('json')) {
        const content = fs.readFileSync(filePath, 'utf-8');
        const modified = rewriteContent(content);
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(modified);
      } else {
        const stat = fs.statSync(filePath);
        res.writeHead(200, {
          'Content-Type': contentType,
          'Content-Length': stat.size,
        });
        const stream = fs.createReadStream(filePath);
        stream.pipe(res);
      }
    } catch (err) {
      console.error(`Error serving ${req.url}:`, err);
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(`500 Internal Server Error: ${err.message}`);
    }
  });

  server.listen(port, '0.0.0.0', () => {
    console.log(`READY: http://localhost:${port}`);
  });
}

main();
