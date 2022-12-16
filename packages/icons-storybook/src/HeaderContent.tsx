import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from '@mui/material';

export default function HeaderContent() {
  return (
    <Container maxWidth="md">
      <Typography variant="h2" component="h1" gutterBottom>
        react-icons-sax
      </Typography>
      <Typography variant="subtitle1" component="h2" gutterBottom>
        {` Icons are provided by Iconsax. Please visit the official website for further details `}
        <Link href="https://iconsax.io/" target="_blank">
          iconsax.io
        </Link>
      </Typography>
    </Container>
  );
}
