import { getPage } from '../getPage.js';

export default await getPage({
  BASE_PATH: '../',
  TITLE: 'Alex Matiasevich',
  HEADER_CONTENT: 'Alex Matiasevich',
  MD_URL: './src/static-pages/cv-es/index.md',
});
