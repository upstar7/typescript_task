import { Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) => ({
  rotateIcon: {
    animation: '$spin 2s linear infinite',
    height: '60px',
  },
  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
  text: {
    ...theme.typography['body-lg-med'],
  },
});
