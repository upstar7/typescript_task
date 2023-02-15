import { Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) => ({
  // header: {
  //   background: '#161a32',
  // },
  // titleBox: {
  //   display: 'flex',
  //   flexDirection: 'column' as const,
  //   alignItems: 'flex-start',
  //   [theme.breakpoints.up('sm')]: {
  //     flexDirection: 'row' as const,
  //     alignItems: 'center',
  //   },
  // },
  text: {
    color: theme.palette.text.secondary,
    marginBottom: '24px',
  },
  boostedBy: {
    ...theme.typography['h2'],
    color: '#DB8332',
    flexGrow: 1,
    '& span': {
      color: theme.palette.text.primary,
    },
  },
  header: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexWrap: 'wrap' as const,
    rowGap: '16px',
    padding: '24px',
    borderRadius: '12px 12px 0 0',
  },
  socials: {
    display: 'flex',
    columnGap: '8px',
    rowGap: '8px',
    flexWrap: 'wrap' as const,
  },
});
