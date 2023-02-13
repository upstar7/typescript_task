export const styles = theme => ({
  stats: {
    display: 'grid',
    gridTemplateColumns: '100%',
    rowGap: '32px',
    columnGap: '32px',
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '583fr 417fr',
    },
  },
  userStats: {},
  platform: {
    [theme.breakpoints.up('md')]: {
      textAlign: 'right' as const,
    },
  },
});
