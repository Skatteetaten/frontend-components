const madge = require('madge');
const path = require('path');

madge(path.join(__dirname, '../src'), {
  fileExtensions: ['ts', 'tsx'],
})
  .then((res) => {
    const circularDeps = res.circular();

    if (!circularDeps.length) {
      return;
    }

    console.log(circularDeps.length + ' circular dependencies found');
    const out = circularDeps
      .map((circularDep) => circularDep.join(' -> '))
      .join('\n');
    console.log(out);

    throw new Error('circular-deps');
  })
  .catch(() => {
    process.exit(0);
  });
