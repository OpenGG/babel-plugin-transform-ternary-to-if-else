import {
  readFile as rf,
} from 'fs/promises';

const readFile = path => rf(path, {
  encoding: 'utf8',
});

export default readFile;
