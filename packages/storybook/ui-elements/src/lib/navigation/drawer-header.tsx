import { styled } from '@mui/material/styles';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default DrawerHeader;
