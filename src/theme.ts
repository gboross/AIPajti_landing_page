import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFC600',
    },
    secondary: {
      main: '#0B1437',
    },
    background: {
      default: '#070B24',
      paper: '#0B1437',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});