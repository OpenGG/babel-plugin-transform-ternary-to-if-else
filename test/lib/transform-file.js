import babel from '@babel/core';

const transform = (path, opts) => babel.transformFileAsync(
  path,
  opts
);

export default transform;
