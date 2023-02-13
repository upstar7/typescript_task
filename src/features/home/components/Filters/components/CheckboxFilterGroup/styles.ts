import { Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) => ({
  checkboxFilter: {
    // display: 'flex',
  },
  checkbox: {
    paddingRight: '10px',
    marginTop: '16px',
    '& + $select': {
      marginTop: '24px',
    },
  },
});
