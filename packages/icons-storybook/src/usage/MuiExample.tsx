import * as React from 'react';
import Typography from '@mui/material/Typography';
import { CodeHighlight } from '@bigration-libs/ui-elements';
import { Link, Stack } from '@mui/material';
import { EssetionalPetOutline } from 'react-icons-sax';
import Chip from '@mui/material/Chip';

export default function MuiExample() {
  return (
    <Stack direction="column" gap={2}>
      <Typography variant="h5">
        {`React Iconsax example with React MUI library `}
        <Link href="https://mui.com/" target="_blank">
          mui.com
        </Link>
      </Typography>

      <Typography variant="body1">
        {`Because icons use "currentColor," mui color variations will also be used on icons. `}
      </Typography>

      <Stack direction="row" gap={5} alignItems="center">
        <Stack direction="column" gap={2} alignItems="center">
          <Typography textAlign="center">Primary color</Typography>
          <Chip
            color="primary"
            icon={<EssetionalPetOutline />}
            label="With Icon"
          />
        </Stack>

        <CodeHighlight
          markdown={`
  \`\`\`typescript
import Chip from '@mui/material/Chip';

<Chip icon={<EssetionalPetOutline />} color="primary" label="With Icon" />

  \`\`\`
`}
        />
      </Stack>

      <Stack direction="row" gap={5} alignItems="center">
        <Stack direction="column" gap={2} alignItems="center">
          <Typography textAlign="center">Default color</Typography>
          <Chip
            color="default"
            icon={<EssetionalPetOutline />}
            label="With Icon"
          />
        </Stack>

        <CodeHighlight
          markdown={`
  \`\`\`typescript
import Chip from '@mui/material/Chip';

<Chip icon={<EssetionalPetOutline />}  color="default" label="With Icon" />

  \`\`\`
`}
        />
      </Stack>

      <Stack direction="row" gap={5} alignItems="center">
        <Stack direction="column" gap={2} alignItems="center">
          <Typography textAlign="center">Secondary color</Typography>
          <Chip
            color="secondary"
            icon={<EssetionalPetOutline />}
            label="With Icon"
          />
        </Stack>

        <CodeHighlight
          markdown={`
  \`\`\`typescript
import Chip from '@mui/material/Chip';

<Chip icon={<EssetionalPetOutline />}  color="secondary" label="With Icon" />

  \`\`\`
`}
        />
      </Stack>

      <Stack direction="row" gap={5} alignItems="center">
        <Stack direction="column" gap={2} alignItems="center">
          <Typography textAlign="center">Error color</Typography>
          <Chip
            color="error"
            icon={<EssetionalPetOutline />}
            label="With Icon"
          />
        </Stack>

        <CodeHighlight
          markdown={`
  \`\`\`typescript
import Chip from '@mui/material/Chip';

<Chip icon={<EssetionalPetOutline />}  color="error" label="With Icon" />

  \`\`\`
`}
        />
      </Stack>

      <Stack direction="row" gap={5} alignItems="center">
        <Stack direction="column" gap={2} alignItems="center">
          <Typography textAlign="center">Info color</Typography>
          <Chip
            color="info"
            icon={<EssetionalPetOutline />}
            label="With Icon"
          />
        </Stack>

        <CodeHighlight
          markdown={`
  \`\`\`typescript
import Chip from '@mui/material/Chip';

<Chip icon={<EssetionalPetOutline />}  color="info" label="With Icon" />

  \`\`\`
`}
        />
      </Stack>
      <Stack direction="row" gap={5} alignItems="center">
        <Stack direction="column" gap={2} alignItems="center">
          <Typography textAlign="center">Warning color</Typography>
          <Chip
            color="warning"
            icon={<EssetionalPetOutline />}
            label="With Icon"
          />
        </Stack>

        <CodeHighlight
          markdown={`
  \`\`\`typescript
import Chip from '@mui/material/Chip';

<Chip icon={<EssetionalPetOutline />}  color="warning" label="With Icon" />

  \`\`\`
`}
        />
      </Stack>
      <Stack direction="row" gap={5} alignItems="center">
        <Stack direction="column" gap={2} alignItems="center">
          <Typography textAlign="center">Success color</Typography>
          <Chip
            color="success"
            icon={<EssetionalPetOutline />}
            label="With Icon"
          />
        </Stack>

        <CodeHighlight
          markdown={`
  \`\`\`typescript
import Chip from '@mui/material/Chip';

<Chip icon={<EssetionalPetOutline />}  color="success" label="With Icon" />

  \`\`\`
`}
        />
      </Stack>
    </Stack>
  );
}
