import { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  table: {
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    backgroundColor: theme.palette.background.default,
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
    [theme.breakpoints.up('lg')]: {
      borderBottomLeftRadius: 0,
    },
  },
  cell: {
    backgroundColor: theme.palette.background.default,
    whiteSpace: 'nowrap' as const,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  row: {
    backgroundColor: theme.palette.background.default,
    display: 'grid',
    gridTemplateColumns: '35fr 35fr 30fr',
    padding: '16px 24px',
    borderBottom: 'solid 2px #363B63',
    alignItems: 'center',
    columnGap: '16px',
    '&:last-child': {
      borderBottom: 0,
    },
    '& $cell:nth-child(2), & $cell:nth-child(3)': {
      textAlign: 'right' as const,
    },
  },
  header: {
    ...theme.typography['subline-sm'],
    color: '#999CB3',
  },
  footer: {
    backgroundColor: theme.palette.background.default, 
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
    [theme.breakpoints.up('lg')]: {
      borderBottomLeftRadius: 0,
    },
  },
  asset: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    width: '32px',
    height: '32px',
    marginRight: '8px',
  },
  tokenAmount: {
    whiteSpace: 'nowrap' as const,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: 'block',
    width: 'min-content',
    maxWidth: '100%',
    marginLeft: 'auto',
  },
});
