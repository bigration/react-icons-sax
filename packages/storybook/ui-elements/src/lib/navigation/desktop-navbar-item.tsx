import * as React from 'react';
import { FC } from 'react';
import { ListItemIcon, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ListItem, ListItemProps } from '@mui/material';
import Link from 'next/link';
import { borderRadius, hoverStyle } from './../core';

export const DesktopNavbarItem: FC<{
  path: string;
  name: string;
  Icon?: React.ComponentType;
}> = ({ name, Icon, path }) => {
  return (
    <Link style={{ textDecoration: 'none' }} href={path}>
      <SidebarListItemButton
        sx={{
          m: 0.5,
        }}
      >
        <>
          {Icon && (
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
          )}
          <ListItemText primary={name} />
        </>
      </SidebarListItemButton>
    </Link>
  );
};

const SidebarListItemButton = styled(ListItem)<ListItemProps>(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: 'transparent',
  borderRadius: borderRadius,
  '&:hover': hoverStyle,
  cursor: 'pointer',
}));
