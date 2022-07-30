import fs from 'fs';
import { findFiles } from '@jam-do/jam-tools/node/index.js';
import { applyData, cssMin } from '@jam-do/jam-tools/iso/index.js';
import { marked } from 'marked';
import emptySvg from './src/svg/empty-img.svg.js';
import { importFresh } from './importFresh.js';
import hljs from 'highlight.js';
 
const MD_META_OPEN_TOKEN = '```json';
const MD_META_CLOSE_TOKEN = '```';
const TMP_SPLITTER = '---|||---SPLIT---|||---';

const CFG = {
  imgDir: './dist/img',
  pulseDir: './dist/pulse',
  entries: [
    {
      template: './src/tpl/home.htm.js',
      styles: './src/css/index.css.js',
      content: './src/md/cv.md',
      assets: [
        'js',
        'css',
      ],
      out: './dist/index.html',
    }
  ],
};

marked.setOptions({
  highlight: (code, lang, callback) => {
    code = hljs.highlight(code, {language: lang}).value;
    callback && callback(undefined, code);
  }
});

/**
 * 
 * @param {String} md 
 * @returns 
 */
function md2html(md) {
  return new Promise((resolve, reject) => {
    marked.parse(md, (err, html) => {
      if (err) {
        reject();
      }
      resolve(html);
    });
  });
}

export function build() {
  if (!fs.existsSync(CFG.pulseDir)) {
    fs.mkdirSync(CFG.pulseDir, {
      recursive: true,
    });
  }
  CFG.entries.forEach(async (entry) => {
    let md = fs.readFileSync(entry.content).toString();
    let content = await md2html(md);
    let tpl = await importFresh(entry.template);
    let css = await importFresh(entry.styles);
    let pulse = '';
    let pulseMdArr = findFiles('./src/', ['.md'], ['cv.md']).reverse();
    for (let i = 0; i < pulseMdArr.length; i++) {
      let mdPath = pulseMdArr[i];
      let fileStr = fs.readFileSync(mdPath).toString().trim();
      let meta;
      if (fileStr.startsWith(MD_META_OPEN_TOKEN)) {
        fileStr = fileStr.replace(MD_META_OPEN_TOKEN, '');
        fileStr = fileStr.replace(MD_META_CLOSE_TOKEN, TMP_SPLITTER);
        let fileParts = fileStr.split(TMP_SPLITTER);
        meta = JSON.parse(fileParts[0]);
        fileStr = fileParts[1];
      }
      if (meta) {
        let pulsePageHref = `pulse/${meta.title.toLowerCase().replaceAll(' ', '_').replaceAll('.', '-')}.html`;
        meta.href = meta.link || pulsePageHref;
        if (!meta.image) {
          meta.image = emptySvg;
        }
        let pulseItemTpl = await importFresh('./src/tpl/pulse-item.htm.js');
        let pulseItemHtml = applyData(pulseItemTpl, meta);
        pulse += pulseItemHtml;
        let pulseDocTpl = await importFresh('./src/tpl/pulse-page.htm.js');
        let pulseDocCss = await importFresh('./src/css/pulse.css.js');
        let pulseDocHtml = applyData(pulseDocTpl, {
          TITLE: meta.title,
          CSS: cssMin(pulseDocCss),
          CONTENT: await md2html(fileStr),
        });
        fs.writeFileSync('./dist/' + pulsePageHref, pulseDocHtml);
      }
    }
    let html = applyData(tpl, {
      CSS: cssMin(css),
      CONTENT: content,
      PULSE: pulse,
    });
    fs.writeFileSync(entry.out, html);
  });
}

build();
