import fs from 'fs';

let cvTxt = fs.readFileSync('./src/static-pages/cv.md').toString();
fs.writeFileSync('./dist/llms.txt', cvTxt);