import { Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) => ({
  vault: {
    display: 'block',
    position: 'relative' as const,
    color: '#9595B2',
    background: theme.palette.background.light,
    padding: '24px',
    textDecoration: 'none',
    '&:last-child': {
      borderBottom: 0,
      borderBottomLeftRadius: '8px',
      borderBottomRightRadius: '8px',
      backgroundClip: 'padding-box',
    },
    "&:nth-child(even)": {
      backgroundColor: theme.palette.background.default,
    }
  },
  vaultRetired: {
    backgroundColor: '#1B1E31!important',
  },
  vaultEarnings: {
    backgroundColor: '#322460',
  },
  vaultInner: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    columnGap: '24px',
    rowGap: '24px',
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: 'minmax(0, 30fr) minmax(0, 70fr)',
    },
  },
});
