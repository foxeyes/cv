import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import { md } from 'jsda-kit/node/md.js';
import { applyData } from 'jsda-kit/iso/applyData.js';
import styles from '../src/static-pages/css/index.css.js';

let template = fs.readFileSync('./src/static-pages/pdf.tpl.html', 'utf8');
let outDir = './src/static-pages/downloads/copy-pdf';

let cvSources = [
  { mdPath: './src/static-pages/cv.md', title: 'Alex Matiasevich - CV (EN)', file: 'Alex_Matiasevich_CV_EN.pdf' },
  { mdPath: './src/static-pages/cv-es/index.md', title: 'Alex Matiasevich - CV (ES)', file: 'Alex_Matiasevich_CV_ES.pdf' },
  { mdPath: './src/static-pages/cv-ru/index.md', title: 'Alex Matiasevich - CV (RU)', file: 'Alex_Matiasevich_CV_RU.pdf' },
];

// Same styling the live site's <article> uses, minus the header/footer/side-panel chrome
// that pdf.tpl.html deliberately doesn't include.
const printStyles = /*css*/ `
${styles}
* {
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}

/* Keep headings glued to what follows them, and don't split list items/code blocks across pages. */
h1, h2, h3, h4, h5, h6 {
  break-after: avoid;
  break-inside: avoid;
}
li, blockquote, pre {
  break-inside: avoid;
}
/* The fade-in transition and 100dvh sizing are meant for an interactive single-viewport
   screen, not a static paginated document. */
* {
  transition: none !important;
  animation: none !important;
  background-color: unset !important;
}
html, body {
  height: auto !important;
  font-size: 14px;
}
article {
  min-height: auto !important;
}
/* Chrome's PDF text layer also mismaps "fi"/"fl" ligature glyphs - disable them. */
article {
  font-variant-ligatures: none;
}
`;

let cssDataUri = `data:text/css;base64,${Buffer.from(printStyles).toString('base64')}`;

fs.mkdirSync(outDir, { recursive: true });

const browser = await puppeteer.launch();

for (const { mdPath, title, file } of cvSources) {
  let html = applyData(template, {
    DESCRIPTION: 'Alex Matiasevich CV',
    AUTHOR: 'Alex Matiasevich',
    KEYWORDS: 'CV, R&D, Symbiote.js, JSDA-Kit, CIT, rnd-pro.com',
    TITLE: title,
    BASE_PATH: './',
    CSS_PATH: cssDataUri,
    JS_PATH: '',
    ICONS_LINK: '',
    IMPORTMAP: '',
    CONTENT: await md(mdPath),
  });

  let page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 1200 });
  await page.setContent(html, { waitUntil: 'domcontentloaded' });
  await page.emulateMediaType('screen');

  let outPath = path.join(outDir, file);
  await page.pdf({
    path: outPath,
    format: 'A4',
    printBackground: false,
    margin: { top: '5mm', bottom: '5mm', left: '0mm', right: '5mm' },
    // Chrome's experimental tagged-PDF (accessibility structure tree) generation scrambles
    // the extracted/copy-pasted text order for this layout - plain text order is correct.
    tagged: false,
  });
  await page.close();
  console.log(`Generated ${outPath}`);
}

await browser.close();
