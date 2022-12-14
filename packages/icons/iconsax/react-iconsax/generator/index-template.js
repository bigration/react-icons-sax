const path = require('path');
const fs = require('fs');

const metadataPath = 'packages/icons/iconsax/react-iconsax/generator/dist';

function defaultIndexTemplate(filePaths) {
  const metadata = [];

  const exportEntries = filePaths.map((filePath) => {
    const basename = path.basename(filePath, path.extname(filePath));
    const rootFolder = path.basename(path.dirname(filePath));

    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;

    const splitDirectory = path.dirname(filePath).split('/');
    const category = splitDirectory[splitDirectory.length - 3];

    const importName = `${category}${exportName}${
      rootFolder[0].toUpperCase() + rootFolder.slice(1)
    }`;

    metadata.push({ importName, exportName, category, rootFolder });

    return `export { default as ${importName}} from './${basename}'`;
  });

  fs.writeFile(
    `${metadataPath}/${Math.random()}.json`,
    JSON.stringify(metadata),
    function (err) {
      if (err) throw err;
    }
  );

  return exportEntries.join('\n');
}

module.exports = defaultIndexTemplate;
