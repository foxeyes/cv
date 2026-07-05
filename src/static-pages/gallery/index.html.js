import { getPage } from '../getPage.js';

export default await getPage({
  BASE_PATH: '../',
  TITLE: 'Alex Matiasevich - Gallery',
  HEADER_CONTENT: 'Gallery',
  MD_URL: './src/static-pages/gallery/index.md',
});