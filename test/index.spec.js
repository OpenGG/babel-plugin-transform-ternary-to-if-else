import {
  expect,
} from 'chai';

import Path from './lib/rel-path';

import readCases from './lib/read-cases';

import transform from './lib/transform-file';

import readFile from './lib/read-file';

import safeEval from './lib/safe-eval';

const relPath = Path(import.meta.url);

const cases = readCases(
  relPath('cases')
);

const babelrc = relPath('.babelrc');

cases.forEach(
  name => it(
    name,
    async () => {
      const [transformed, compare] = await Promise.all([
        transform(
          relPath(`cases/${name}/input.js`).pathname, {
            extends: babelrc.pathname,
          }
        ),
        readFile(
          relPath(`cases/${name}/output.js`)
        ),
      ]);

      expect(transformed.code)
        .to.equal(compare.trim());

      if (name.startsWith('execute')) {
        const {
          expected,
          output,
        } = safeEval(
          transformed.code
        );

        expect(expected)
          .to.equal(output);

        expect(expected)
          .to.be.a('number');
      }
    }
  )
);
