import { Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) => ({
  container: {
    marginTop: '32px',
    display: 'grid',
    gridTemplateColumns: '100%',
    rowGap: '48px',
    columnGap: '48px',
    [theme.breakpoints.up('lg')]: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,666fr) minmax(0,333fr)',
    },
  },
  interestStats: {
    width: '100%',
  },
  interestStatsBox: {
    height: 96,
    display: 'flex',
    justifyContent: 'flex-start',
    backgroundColor: theme.palette.background.default,
    borderRadius: '8px',
    // padding: '16px 16px',
  },
  depositStats: {
    width: '100%',
  },
  depositStatsBox: {
    height: 96,
    display: 'flex',
    justifyContent: 'flex-start',
    backgroundColor: theme.palette.background.default,
    borderRadius: '8px',
  },
  stat: {
    display: 'flex',
    width: '33%',
    paddingTop: 0,
    paddingBottom: 0,
    marginRight: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      marginRight: theme.spacing(2),
    },
  },
  stat3: {
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  divider: {
    marginRight: theme.spacing(3),
    width: 2,
    color: theme.palette.background.vaults.defaultOutline,
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(2.5),
    },
  },
  divider1: {
    width: 2,
    color: theme.palette.background.vaults.defaultOutline,
    marginLeft: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
      marginRight: theme.spacing(2.5),
    },
  },
});
