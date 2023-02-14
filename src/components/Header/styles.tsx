import { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  navHeader: {
    background: 'transparent',
    boxShadow: 'none',
    '&:hover .MuiListItem-button': {
      background: 'transparent',
    },
  },
  flex: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    alignItems: 'center',
    alignContent: 'center',
    columnGap: theme.spacing(10),
  },
  navbar: {
    display: 'flex',
    marginTop: '26px',
    alignItems: 'center',
    alignContent: 'center',
    columnGap: theme.spacing(10),
  },
  connection: {
    display: 'flex',
    columnGap: theme.spacing(10),
  },
  hasPortfolio: {
    backgroundColor: theme.palette.background.header,
  },
  userOnDashboard: {
    backgroundColor: theme.palette.background.alternativeFooterHeader,
  },
  container: {
    height: '140px',
    paddingTop: '16px',
    paddingBottom: '12px',
  },
  header: {
    backgroundColor: theme.palette.background.header,
  },
  content: {
    paddingTop: '24px',
    justifyContent: 'space-between',
  },
  beefy: {
    display: 'block',
    marginLeft: '20px',
    '& img': {
      // height: '40px',
      display: 'block',
    },
  },
  // navbar: {
  //   paddingTop: '10px',
  // }
});
