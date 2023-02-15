import { Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) => ({
  vaultIcon: {
    marginLeft: '30px',
    backgroundColor: theme.palette.background.default,
    padding: '10px',
    border: `1px solid white`,
    borderRadius: '6px',
    flexShrink: 0,
    width: '70px',
    height: '70px',
  },
});
