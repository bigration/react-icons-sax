import * as React from 'react';
import { FC, PropsWithChildren, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Theme, useMediaQuery } from '@mui/material';
import { drawerWidth } from '../core';
import DesktopNavBar from './desktop-nav-bar';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

export type DashboardLayoutProps = {
  route: string;
  initialDrawerOpened?: boolean;
};

export const DashboardLayout: FC<PropsWithChildren<DashboardLayoutProps>> = ({
  route,
  initialDrawerOpened,
  children,
}) => {
  const [open, setOpen] = React.useState<boolean>(
    initialDrawerOpened !== undefined ? initialDrawerOpened : true
  );

  const smallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  );

  useEffect(() => {
    if (initialDrawerOpened !== undefined) {
      return;
    }
    if (open && smallScreen) {
      setOpen(false);
    }
    if (!open && !smallScreen) {
      setOpen(true);
    }
  }, [smallScreen, initialDrawerOpened, open]);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <DesktopNavBar open={open} handleDrawerClose={handleDrawerClose} />
      <Main open={open}>{children}</Main>
    </Box>
  );
};
