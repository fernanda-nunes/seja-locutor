import { chromium } from 'playwright'
import fs from 'node:fs'
import path from 'node:path'
import http from 'node:http'

const DIST_DIR = path.resolve('dist')
const SITE_ORIGIN = 'https://sejalocutor.com.br'

const DEFAULT_META = {
  title: 'Seja Locutor | Curso de Locução Profissional',
  description:
    'Aprenda as técnicas de locução comercial para destravar sua voz e dominar o mercado com Rita Mirone.',
}

const ROUTE_META = {
  '/': {
    title: 'Seja Locutor | Curso de Locução Profissional',
    description:
      'Aprenda as técnicas de locução comercial para destravar sua voz e dominar o mercado com Rita Mirone.',
  },
  '/curso': {
    title: 'Curso - A Voz que Vende | Rita Mirone',
    description:
      'Conheça o curso de Locução Publicitária e Comercial criado por Rita Mirone e descubra como transformar sua voz em renda.',
  },
  '/aulaavulsa': {
    title: 'Aula Avulsa - A Voz que Vende | Rita Mirone',
    description:
      'Domine entonação, ritmo e interpretação de vinhetas e chamadas com uma aula avulsa extraída do curso de Rita Mirone.',
  },
  '/mentoria': {
    title: 'Mentoria - A Voz que Vende | Rita Mirone',
    description:
      'Acompanhe a mentoria individual por videochamada, exercícios ao vivo, indicações e oportunidades no mercado internacional.',
  },
  '/quemsoueu': {
    title: 'Quem sou eu - A Voz que Vende | Rita Mirone',
    description:
      'Conheça a trajetória de Rita Mirone como jornalista, atriz, locutora comercial e dubladora de comerciais e games.',
  },
  '/depoimentos': {
    title: 'Depoimentos - A Voz que Vende | Rita Mirone',
    description:
      'Veja relatos e resultados de alunos e mentorados que transformaram a voz em carreira e oportunidades na locução.',
  },
}

const ROUTES = Object.keys(ROUTE_META)

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.json': 'application/json; charset=utf-8',
}

function startStaticServer(rootDir) {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const reqUrl = new URL(req.url || '/', 'http://127.0.0.1')
      let pathname = reqUrl.pathname

      try {
        pathname = decodeURIComponent(pathname)
      } catch {
        pathname = '/'
      }

      let filePath = path.join(rootDir, pathname)
      if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
        filePath = path.join(filePath, 'index.html')
      }

      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        filePath = path.join(rootDir, 'index.html')
      }

      const ext = path.extname(filePath).toLowerCase()
      res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' })
      fs.createReadStream(filePath).pipe(res)
    })

    server.listen(0, '127.0.0.1', () => {
      const address = server.address()
      resolve({ server, port: address.port })
    })
  })
}

async function runPrerender() {
  if (!fs.existsSync(DIST_DIR)) {
    throw new Error('A pasta "dist" não existe. Executa o "vite build" antes do prerender.')
  }

  const { server, port } = await startStaticServer(DIST_DIR)
  const baseUrl = `http://127.0.0.1:${port}`

  const browser = await chromium.launch({ headless: true })

  try {
    const context = await browser.newContext()

    for (const route of ROUTES) {
      const page = await context.newPage()
      const targetUrl = `${baseUrl}${route}`
      console.log(`A pré-renderizar: ${route}`)

      try {
        await page.goto(targetUrl, { waitUntil: 'domcontentloaded', timeout: 15000 })
        await page.waitForSelector('#root > *', { timeout: 10000 })
        await page.waitForLoadState('networkidle', { timeout: 5000 }).catch(() => {})
        await page.waitForTimeout(300)

        const routeMeta = ROUTE_META[route] || DEFAULT_META
        const canonicalUrl = `${SITE_ORIGIN}${route === '/' ? '/' : route}`

        await page.evaluate(
          ({ title, description, url }) => {
            const titles = Array.from(document.head.querySelectorAll('title'))
            const finalTitle = (titles[0]?.textContent || title || '').trim()

            titles.slice(1).forEach((el) => el.remove())

            let primaryTitle = document.head.querySelector('title')
            if (!primaryTitle) {
              primaryTitle = document.createElement('title')
              document.head.prepend(primaryTitle)
            }
            primaryTitle.textContent = finalTitle

            let metaDesc = document.head.querySelector('meta[name="description"]')
            if (!metaDesc) {
              metaDesc = document.createElement('meta')
              metaDesc.setAttribute('name', 'description')
              document.head.appendChild(metaDesc)
            }
            metaDesc.setAttribute('content', description)

            const setOgMeta = (property, content) => {
              let tag = document.head.querySelector(`meta[property="${property}"]`)
              if (!tag) {
                tag = document.createElement('meta')
                tag.setAttribute('property', property)
                document.head.appendChild(tag)
              }
              tag.setAttribute('content', content)
            }

            setOgMeta('og:title', finalTitle)
            setOgMeta('og:description', description)
            setOgMeta('og:url', url)

            let canonical = document.head.querySelector('link[rel="canonical"]')
            if (!canonical) {
              canonical = document.createElement('link')
              canonical.setAttribute('rel', 'canonical')
              document.head.appendChild(canonical)
            }
            canonical.setAttribute('href', url)
          },
          {
            title: routeMeta.title,
            description: routeMeta.description,
            url: canonicalUrl,
          }
        )

        const html = await page.content()

        const outputFile =
          route === '/'
            ? path.join(DIST_DIR, 'index.html')
            : path.join(DIST_DIR, route.replace(/^\/+|\/+$/g, ''), 'index.html')

        fs.mkdirSync(path.dirname(outputFile), { recursive: true })
        fs.writeFileSync(outputFile, html, 'utf8')
        console.log(`Guardado em: ${path.relative(process.cwd(), outputFile)}`)
      } finally {
        await page.close()
      }
    }
  } finally {
    await browser.close()
    await new Promise((resolve) => server.close(resolve))
  }
}

runPrerender().catch((err) => {
  console.error('Erro no prerender:', err)
  process.exit(1)
})