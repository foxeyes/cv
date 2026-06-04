import { getPage } from '../getPage.js';

export default await getPage({
  BASE_PATH: '../',
  TITLE: 'Alex Matiyasevich',
  HEADER_CONTENT: 'Alex Matiyasevich',
  MD_URL: './src/static-pages/cv-es/index.md',
});
