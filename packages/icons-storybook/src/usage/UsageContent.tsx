import * as React from 'react';
import Container from '@mui/material/Container';
import HeaderContent from '../HeaderContent';
import Typography from '@mui/material/Typography';
import { CodeHighlight } from '@bigration-libs/ui-elements';
import IconsPropsTable from './IconsPropsTable';
import { Stack } from '@mui/material';
import MuiExample from './MuiExample';

export default function UsageContent() {
  const basicCode = `
  \`\`\`typescript
import { EssetionalPetOutline } from 'react-icons-sax';

<EssetionalPetOutline />;

  \`\`\`
`;

  return (
    <>
      <HeaderContent />
      <Container maxWidth="md">
        <Stack direction="column" gap={2}>
          <Typography variant="subtitle1">
            Here is a basic example of using `react-icons-sax` within a `React`
            application.
          </Typography>
          <CodeHighlight markdown={basicCode} />
          <Typography variant="h5">All props are optional</Typography>

          <IconsPropsTable />

          <MuiExample />
        </Stack>
      </Container>
    </>
  );
}
