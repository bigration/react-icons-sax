import * as React from 'react';
import Container from '@mui/material/Container';
import HeaderContent from '../HeaderContent';
import { Stack, Typography } from '@mui/material';
import { CodeHighlight } from '@bigration-libs/ui-elements';

export default function InstallationContent() {
  const npmInstall = `
  \`\`\`bash

  npm install react-icons-sax --save

  \`\`\`
`;

  const yarnInstall = `
  \`\`\`bash

  yarn add react-icons-sax

  \`\`\`
`;

  return (
    <>
      <HeaderContent />
      <Container maxWidth="md">
        <Stack direction="column" gap={1}>
          <Typography variant="h4">Install package</Typography>
          <Typography variant="subtitle1">To install with `npm`:</Typography>
          <CodeHighlight markdown={npmInstall} />
          <Typography variant="subtitle1">To install with `yarn`:</Typography>
          <CodeHighlight markdown={yarnInstall} />
        </Stack>
      </Container>
    </>
  );
}
