import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import * as React from 'react';
import { FC } from 'react';
import { styled } from '@mui/material/styles';
import { drawerWidth } from '../core';
import { DesktopNavbarItem } from './desktop-navbar-item';
import {
  SettingsSetting2Outline,
  LocationDirectLeftOutline,
  EssetionalEmojiHappyOutline,
} from 'react-icons-sax';

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
          <LocationDirectLeftOutline />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <DesktopNavbarItem
          name="Installation"
          path="/installation"
          Icon={SettingsSetting2Outline}
        />
        <DesktopNavbarItem
          name="Usage"
          path="/usage"
          Icon={EssetionalEmojiHappyOutline}
        />
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
