import fs from 'fs';
import { findFiles } from '@jam-do/jam-tools/node/index.js';
import { applyData, cssMin } from '@jam-do/jam-tools/iso/index.js';
import { marked } from 'marked';
import PROJECT from './project.js';
import emptySvg from './src/svg/empty-img.svg.js';
 
const MD_META_OPEN_TOKEN = '```json';
const MD_META_CLOSE_TOKEN = '```';
const TMP_SPLITTER = '---|||---SPLIT---|||---';

/**
 * 
 * @param {String} path 
 * @returns 
 */
async function imp(path) {
  let cacheDrop = '?' + Date.now();
  return (await import(path + cacheDrop)).default;
}

export function build() {
  if (!fs.existsSync(PROJECT.outDir)) {
    fs.mkdirSync(PROJECT.outDir);
  }
  PROJECT.entries.forEach(async (entry) => {
    let md = fs.readFileSync(entry.content).toString();
    let content = marked(md);
    let tpl = await imp(entry.template);
    let css = await imp(entry.styles);
    let pulse = '';
    let pulseMdArr = findFiles('./src/', ['.md'], ['cv.md']);
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
        meta.href = './pulse/';
        if (!meta.image) {
          meta.image = emptySvg;
        }
        let pulseItemTpl = await imp('./src/tpl/pulse-item.htm.js');
        let pulseItemHtml = applyData(pulseItemTpl, meta);
        pulse += pulseItemHtml;
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
