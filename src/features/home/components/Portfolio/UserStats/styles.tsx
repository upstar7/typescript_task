export const styles = theme => ({
  userStats: {
    // display: 'flex',
  },
  stat: {
    paddingTop: '10px',
    paddingBottom: 0,
    [theme.breakpoints.down('sm')]: {
      margin: '8px 24px 8px 0px',
    },
  },
  depositValue: {
    ...theme.typography['h3'],
    paddingLeft: '20px',
    fontWeight: 'bold',
    color: '#d2c601',
  },
  depositLabel: {
    ...theme.typography['h3'],
    display: 'inline-flex',
    fontWeight: 'bold',
    color: '#d2c601',
  },
  dailyValue: {
    ...theme.typography['h3'],
    paddingLeft: '20px',
    fontWeight: 'bold',
    color: '#09bec6',
  },
  dailyLabel: {
    ...theme.typography['h3'],
    display: 'inline-flex',
    fontWeight: 'bold',
    color: '#09bec6',
  },
  blurred: {
    filter: 'blur(.5rem)',
  },
  obscured: {
    color: '#424866',
  },

});
