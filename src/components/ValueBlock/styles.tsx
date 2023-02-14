import { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  value: {
    ...theme.typography['body-lg-med'],
    width: '100%',
    marginTop: '12px',
    whiteSpace: 'nowrap' as const,
    textAlign: 'center' as const,
    [theme.breakpoints.down('md')]: {},
  },
  label: {
    width: '100%',
    ...theme.typography['subline-sm'],
    padding: '12px 0',
    backgroundColor: '#161a32',
    color: theme.palette.text.primary,
    // textAlign: 'left' as const,
    [theme.breakpoints.up('md')]: {
      textAlign: 'center' as const,
    },
  },
  price: {
    ...theme.typography['subline-sm'],
    color: theme.palette.text.disabled,
    whiteSpace: 'nowrap' as const,
  },
  blurred: {
    filter: 'blur(.5rem)',
  },
  tooltipLabel: {
    display: 'flex',
    alignItems: 'center',
  },
  tooltipHolder: {
    marginLeft: theme.spacing(0.5),
  },
  noTextContentLoader: {
    paddingTop: '3px',
  },
  borderLeft: {
    borderTopLeftRadius: '8px',
  },
  borderRight: {
    borderTopRightRadius: '8px',
  },
  divide: {
    borderRight: '2px solid white',
  },
});
