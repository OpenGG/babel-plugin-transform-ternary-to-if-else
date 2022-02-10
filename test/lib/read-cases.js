import {
  readdirSync,
} from 'fs';

const readCases = path => readdirSync(
  path
);

export default readCases;
