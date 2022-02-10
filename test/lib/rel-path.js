import { URL } from 'url';

const relPath = base => (...paths) => new URL(paths.join('/'), base);

export default relPath;
