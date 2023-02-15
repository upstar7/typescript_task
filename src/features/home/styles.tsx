import { Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) => ({
  // top: {
  //   backgroundColor: theme.palette.background.footer,
  // },
  portfolioContainer: {
    backgroundColor: theme.palette.background.appBG,
    display: 'flex',
    flexWrap: 'wrap' as const,
    justifyContent: 'space-between',
    padding: '30px 20px',
  },

  vaultContainer: {
    paddingTop: '32px',
    paddingBottom: '32px',
  },
  
  checkbox: {
    // width: '100%',
    marginTop: '16px',
    '& + $select': {
      marginTop: '24px',
    },
  },
});
