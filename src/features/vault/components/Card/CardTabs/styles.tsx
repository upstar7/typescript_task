import { Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) => ({
  tabs: {
    borderRadius: '12px 12px 0 0',
    display: 'flex',
    width: '100%',
    backgroundColor: '#161a32',
  },
  tab: {
    ...theme.typography['body-lg-med'],
    position: 'relative' as const,
    color: '#999CB3',
    background: theme.palette.background.default,
    flexBasis: '1px',
    flexGrow: 1,
    flexShrink: 0,
    padding: '10px 10px',
    margin: '22px 16px',
    border: `1px solid ${theme.palette.background.light}`,
    borderRadius: '8px',
    boxShadow: 'none',
    outline: 'none',
    cursor: 'pointer' as const,
    userSelect: 'none' as const,
    // '&:first-child': {
    //   borderRadius: '12px 0 0 0',
    // },
    // '&:last-child': {
    //   borderRadius: '0 12px 0 0',
    // },
  },
  selectedTab: {
    color: '#F5F5FF',
    border: '1px solid #d4ca09',
    cursor: 'default' as const,
    pointerEvents: 'none' as const,
    '&::after': {
      backgroundColor: '#999CB3',
    },
  },
});
