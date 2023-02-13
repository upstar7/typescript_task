import { Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) => ({
  // top: {
  //   backgroundColor: theme.palette.background.footer,
  // },
  portfolioContainer: {
    backgroundColor: '#1b1e31',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '30px 0px',
  },
  checkboxFilter: {
    // padding: '30px 0px',

  },
  vaultContainer: {
    paddingTop: '32px',
    paddingBottom: '32px',
  },
  vaultType: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 'fit-content',
      flexBasis: '25%',
      flexShrink: 1,
      flexGrow: 1,
    },
    [theme.breakpoints.up('lg')]: {
      flexBasis: 'auto',
      flexShrink: 0,
      flexGrow: 0,
    },
  },
  checkbox: {
    // width: '100%',
    marginTop: '16px',
    '& + $select': {
      marginTop: '24px',
    },
  },
});
