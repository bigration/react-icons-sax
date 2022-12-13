const path = require('path');
const fs = require('fs');
const lodash = require('lodash');

const directoryPath = path.join(__dirname, 'metadata');

async function postProcess() {
  const files = await fs.promises.readdir(directoryPath);

  const content = await Promise.all(
    files.map(async (file) => {
      const buffer = await fs.promises.readFile(directoryPath + '/' + file);
      return JSON.parse(buffer.toString());
    })
  );

  const merge = content.reduce(function (a, b) {
    return a.concat(b);
  }, []);

  const groupByRootFolder = lodash.groupBy(merge, (item) => item.rootFolder);

  await fs.promises.writeFile(
    `${directoryPath}/../../src/metadata.ts`,
    `export const metadata: Record<string, Array<{importName: string, exportName: string, category: string, rootFolder: string}>> = ${JSON.stringify(
      groupByRootFolder
    )}`,
    function (err) {
      if (err) throw err;
    }
  );
}

postProcess();
