import { getPage } from './getPage.js';

export default await getPage({
  TITLE: 'Alex Matiasevich',
  HEADER_CONTENT: 'Alex Matiasevich CV',
  MD_URL: './src/static-pages/cv.md',
});