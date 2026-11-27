import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';
import { preview } from 'vite';

const ROUTES = ['/', '/aulaavulsa'];
const PORT = 4173;

async function prerender() {
  const server = await preview({
    preview: { port: PORT, strictPort: true },
  });

  const browser = await chromium.launch();

  try {
    const page = await browser.newPage();

    for (const route of ROUTES) {
      const url = `http://localhost:${PORT}${route}`;
      await page.goto(url, { waitUntil: 'networkidle' });
      await page.waitForSelector('#root > *');

      const html = await page.content();
      const outFile =
        route === '/'
          ? path.resolve('dist/index.html')
          : path.resolve('dist', route.replace(/^\//, ''), 'index.html');

      fs.mkdirSync(path.dirname(outFile), { recursive: true });
      fs.writeFileSync(outFile, html, 'utf-8');
      console.log(`Pré-renderizado: ${route}`);
    }
  } finally {
    await browser.close();
    server.httpServer.close();
  }
}

prerender().catch((err) => {
  console.error('Erro no prerender:', err);
  process.exit(1);
});