export const styles = theme => ({
  userStats: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
    },
  },
  stat: {
    paddingTop: '10px',
    paddingBottom: 0,
  },
  value: {
    ...theme.typography['h3'],
    paddingLeft: '20px',
    fontWeight: 'bold',
    color: '#d2c601',
  },
  label: {
    ...theme.typography['h3'],
    display: 'inline-flex',
    fontWeight: 'bold',
    color: '#d2c601',
  },
  obscured: {
    color: '#424866',
  },
});
