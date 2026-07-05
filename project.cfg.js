import { getDataFn, getRouteFn } from './src/dynamic-pages/node/handlers.js';

/** @type { JSDA_CFG } */
export default {
  dynamic: {
    port: 3000,
    routes: './src/dynamic-pages/routes/routes.js',
    cache: {
      inMemory: true,
      exclude: [
        '/dashboard/',
      ],
    },
    baseDir: './src/dynamic-pages/',
    getRouteFn,
    getDataFn,
  },
  static: {
    outputDir: './dist',
    sourceDir: './src/static-pages',
    entryPatterns: [
      'index.js',
      'index.*.js',
      'llms.txt.js',
      '404.html.js',
      'robots.txt.js',
    ],
    pdf: {
      waitUntil: 'load',
      outputDir: '',
      launchOptions: {},
      options: {
        format: 'A4',
        printBackground: true,
        margin: {
          top: '16mm',
          right: '16mm',
          bottom: '16mm',
          left: '16mm',
        },
      },
    },
  },
  ssr: {
    enabled: true,
    imports: [
      './src/ui-components/ssr-exports.js',
    ],
  },
  minify: {
    js: true,
    css: true,
    html: true,
    svg: true,
    exclude: [],
  },
  bundle: {
    js: true,
    css: true,
    exclude: [],
  },
  log: true,
  importmap: {
    packageList: [
      '@symbiotejs/symbiote',
    ],
    srcSchema: 'https://cdn.jsdelivr.net/npm/{pkg-name}/+esm',
    polyfills: false,
    preload: false,
  },
  sitemap: {
    enabled: true,
    baseUrl: 'https://my-site.com/',
    exclude: [
      '/dashboard/',
      '/404/',
      '/login/',
    ],
  },
  markdown: {
    externalLinks: {
      enabled: true,
      target: '_blank',
      rel: 'noopener noreferrer',
      exclude: [],
    },
  },
}