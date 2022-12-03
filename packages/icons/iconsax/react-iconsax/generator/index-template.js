const path = require('path');

function defaultIndexTemplate(filePaths) {
  const exportEntries = filePaths.map((filePath) => {
    const basename = path.basename(filePath, path.extname(filePath));
    const rootFolder = path.basename(path.dirname(filePath));

    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;

    const splitDirectory = path.dirname(filePath).split('/');
    const category = splitDirectory[splitDirectory.length - 3];

    return `export { default as ${category}${exportName}${
      rootFolder[0].toUpperCase() + rootFolder.slice(1)
    } } from './${basename}'`;
  });
  return exportEntries.join('\n');
}

module.exports = defaultIndexTemplate;
