const path = require('path');
const fs = require('fs');

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

  await fs.promises.writeFile(
    `${directoryPath}/../../src/metadata.ts`,
    `export const metadata: Array<{importName: string, exportName: string, category: string, rootFolder: string}> = ${JSON.stringify(
      merge
    )}`,
    function (err) {
      if (err) throw err;
    }
  );
}

postProcess();
