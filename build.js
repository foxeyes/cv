import fs from 'fs';
import { findFiles } from '@jam-do/jam-tools/node/index.js';
import { applyData, cssMin } from '@jam-do/jam-tools/iso/index.js';
import { jsMin } from '@jam-do/jam-tools/iso/jsMin.js';
import { marked } from 'marked';
import PROJECT from './project.js';

export function build() {
  PROJECT.entries.forEach(async (entry) => {
    let md = fs.readFileSync(entry.content).toString();
    let content = marked(md);
    let cacheDrop = '?' + Date.now();
    let tpl = (await import(entry.template + cacheDrop)).default;
    let css = (await import(entry.styles + cacheDrop)).default;
    let html = applyData(tpl, {
      CSS: cssMin(css),
      CONTENT: content,
    });
    fs.writeFileSync(entry.out, html);
  });
}

build();

