import http from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve('public');
const PORT = 8080;
const types = {'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.mjs':'text/javascript','.png':'image/png','.svg':'image/svg+xml','.ico':'image/x-icon','.json':'application/json','.woff2':'font/woff2','.txt':'text/plain'};
http.createServer(async (req, res) => {
  try {
    let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    let fp = path.join(root, p === '/' ? 'index.html' : p);
    if (!fp.startsWith(root)) { res.writeHead(403).end(); return; }
    let data;
    try { data = await readFile(fp); }
    catch (e) { fp = path.join(root, 'index.html'); data = await readFile(fp); } // SPA fallback
    const ext = path.extname(fp).toLowerCase();
    res.writeHead(200, { 'Content-Type': types[ext] || 'application/octet-stream' });
    res.end(data);
  } catch (e) { res.writeHead(500).end('server error'); }
}).listen(PORT, () => console.log('local board server: http://localhost:' + PORT));
