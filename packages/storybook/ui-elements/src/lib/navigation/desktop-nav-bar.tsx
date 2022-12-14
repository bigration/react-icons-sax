import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import * as React from 'react';
import { FC } from 'react';
import { styled } from '@mui/material/styles';
import { drawerWidth } from './../core';

const DesktopNavBar: FC<{
  open: boolean;
  handleDrawerClose: VoidFunction;
}> = ({ open, handleDrawerClose }) => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant={'persistent'}
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {/*<ChevronLeftIcon />*/}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {/*<DesktopNavbarItem {...APP_ROUTES[UI_ROUTES_NAMES.WORKSPACE]} />*/}
        {/*<DesktopNavbarItem {...APP_ROUTES[UI_ROUTES_NAMES.SUBSCRIPTION]} />*/}
        {/*<DesktopNavbarItemWithCustomFunction*/}
        {/*  {...APP_ROUTES[UI_ROUTES_NAMES.BILLING]}*/}
        {/*  onClick={() => createPortalSession.mutate()}*/}
        {/*/>*/}
        {/*<DesktopNavbarItem*/}
        {/*  {...APP_ROUTES[UI_ROUTES_NAMES.WORKSPACE_SETTINGS]}*/}
        {/*/>*/}
      </List>
    </Drawer>
  );
};

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

export default DesktopNavBar;
