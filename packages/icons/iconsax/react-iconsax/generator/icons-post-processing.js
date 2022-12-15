const path = require('path');
const fs = require('fs');
const lodash = require('lodash');

const directoryPath = path.join(__dirname, 'dist');

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

  await Promise.all(
    Object.keys(groupByRootFolder).map(
      async (group) =>
        await fs.promises.writeFile(
          `${directoryPath}/../../src/${group}.ts`,
          `export const ${group}: Array<{importName: string, exportName: string, category: string, rootFolder: string}> = ${JSON.stringify(
            groupByRootFolder[group].sort(function (a, b) {
              return a.importName.localeCompare(b.importName);
            })
          )}`,
          function (err) {
            if (err) throw err;
          }
        )
    )
  );

  await Promise.all(
    Object.keys(groupByRootFolder).map(
      async (group) =>
        await fs.promises.appendFile(
          `${directoryPath}/../../src/index.ts`,
          `export { ${group} } from './${group}';\n`,
          function (err) {
            if (err) throw err;
          }
        )
    )
  );
}

postProcess();
