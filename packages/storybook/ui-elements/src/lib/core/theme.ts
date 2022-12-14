import { createTheme } from '@mui/material/styles';
import { PaletteOptions } from '@mui/material/styles/createPalette';

export const gridSpacing = 2;
export const gridFormSpacing = 1;
export const drawerWidth = 260;
export const selectedItemDrawerWidth = 400;
export const borderRadius = 12;
export const rightDrawerWidth = 320;

const palette = {
  mode: 'light',
  text: {
    primary: '#262626',
    secondary: '#ffffff',
  },
  background: {
    default: '#F4F5F7',
    paper: '#ffffff',
  },
  primary: {
    light: '#62689a',
    main: '#353E6C',
    dark: '#041841',
    200: '#90caf9',
    800: '#353E6C',
  },
  secondary: {
    light: '#ede7f6',
    main: '#673ab7',
    dark: '#5e35b1',
    200: '#b39ddb',
    800: '#4527a0',
  },
  success: {
    light: '#b9f6ca',
    main: '#00e676',
    dark: '#00c853',
    200: '#69f0ae',
  },
  error: {
    light: '#ef9a9a',
    main: '#f44336',
    dark: '#c62828',
  },
  warning: {
    light: '#fff8e1',
    main: '#ffe57f',
    dark: '#ffc107',
  },
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    900: '#212121',
  },
};

export const hoverStyle = {
  color: palette.secondary?.dark,
  backgroundColor: palette.secondary?.light,
  boxShadow: 'none',
  '& svg': {
    color: palette.secondary?.dark,
  },
};

export const secondaryActiveStyle = {
  color: palette.text.secondary,
  backgroundColor: palette.secondary.dark,
  boxShadow: 'none',
  '& svg': {
    color: palette.text.secondary,
  },
  '& button': {
    color: palette.text.secondary,
  },
};

export const theme = createTheme({
  typography: {
    fontFamily: [
      '"Poppins"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: palette as PaletteOptions,
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          ...hoverStyle,
          borderRadius: borderRadius,
          '&:hover': secondaryActiveStyle,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderRadius: borderRadius,
          paddingLeft: 8,
          paddingRight: 8,
          paddingTop: 5,
          paddingBottom: 5,
        },
      },
    },

    MuiListSubheader: {
      styleOverrides: {
        root: {
          backgroundColor: palette.background.default,
          color: '#5e5e5e',
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          border: '1px solid',
          borderColor: palette.secondary.light,
          // borderRadius: borderRadius,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: palette.text.primary,
        },
      },
    },
    MuiDialogContentText: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.primary,
          padding: 5,
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        containedError: ({ theme }) => ({
          ...theme.typography.button,
          textTransform: 'none',
          borderRadius: borderRadius,
          color: theme.palette.text.secondary,
        }),
        containedInherit: ({ theme }) => ({
          ...theme.typography.button,
          textTransform: 'none',
          borderRadius: borderRadius,
        }),
        containedPrimary: ({ theme }) => ({
          ...theme.typography.button,
          ...hoverStyle,
          textTransform: 'none',
          borderRadius: borderRadius,
          '&:hover': secondaryActiveStyle,
        }),
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: palette.primary.main,
        },
      },
    },
  },
});
