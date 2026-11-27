import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { createServer } from 'vite';

const require = createRequire(import.meta.url);
const React = require('react');
const { renderToString } = require('react-dom/server');

const ROUTES = ['/'];

async function prerender() {
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  try {
    const { RouterProvider } = await vite.ssrLoadModule('@tanstack/react-router');
    const { router } = await vite.ssrLoadModule('/src/App.tsx');

    const distIndexPath = path.resolve('dist/index.html');
    const template = fs.readFileSync(distIndexPath, 'utf-8');

    for (const route of ROUTES) {
      await router.navigate({ to: route });
      await router.load();

      const appHtml = renderToString(
        React.createElement(
          React.StrictMode,
          null,
          React.createElement(RouterProvider, { router })
        )
      );

      const finalHtml = template.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      );

      const outFile =
        route === '/'
          ? distIndexPath
          : path.resolve('dist', route.replace(/^\//, ''), 'index.html');

      fs.mkdirSync(path.dirname(outFile), { recursive: true });
      fs.writeFileSync(outFile, finalHtml, 'utf-8');
      console.log(`Pré-renderizado: ${route}`);
    }
  } finally {
    await vite.close();
  }
}

prerender().catch((err) => {
  console.error('Erro no prerender:', err);
  process.exit(1);
});