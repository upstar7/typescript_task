import { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  header: {
    backgroundColor: '#161a32',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
  tabs: {
    marginTop: '16px',
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.up('sm')]: {
      marginTop: 0,
    },
  },
  layout: {
    backgroundColor: theme.palette.background.default,
    borderRadius: '0 0 12px 12px',
    [theme.breakpoints.up('lg')]: {
      display: 'grid',
      gridTemplateColumns: '232fr 484fr',
    },
  },
});
