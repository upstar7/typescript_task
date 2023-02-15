import { Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) => ({
  selector: {
    display: 'flex',
    flexDirection: 'row' as const,
    flexWrap: 'nowrap' as const,
    columnGap: theme.spacing(2),
    rowGap: theme.spacing(2),
  },
  icon: {
    width: '40px',
    height: '40px',
    display: 'block',
    margin: '0 auto',
  },
  button: {
    background: theme.palette.background.header,
    boxShadow: 'none',
    flexGrow: 1,
    flexShrink: 0,
    border: `solid 2px ${theme.palette.background.header}`,
    borderRadius: '6px',
    cursor: 'pointer',
    '&:not($selected) $icon': {
      '& .bg': {
        fill: '#2E324C',
      },
      '& .fg': {
        fill: '#1B1E31',
      },
    },
  },
  selected: {
    backgroundColor: theme.palette.background.header,
  },
  tooltip: {
    ...theme.typography['body-lg-med'],
    background: theme.palette.background.filters.outline,
    padding: '8px 12px',
    borderRadius: '4px',
    color: theme.palette.text.disabled,
    margin: '4px 0',
  },
  iconWithChain: {
    display: 'flex',
    alignItems: 'center',
  },
  iconWithChainIcon: {
    marginRight: '8px',
  },
  iconWithChainSelected: {
    '& $iconWithChainIcon': {
      marginRight: '4px',
    },
  },
});
