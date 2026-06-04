import { getPage } from './getPage.js';

export default await getPage({
  TITLE: 'Alex Matiyasevich',
  HEADER_CONTENT: 'Alex Matiyasevich',
  MD_URL: './src/static-pages/cv.md',
});