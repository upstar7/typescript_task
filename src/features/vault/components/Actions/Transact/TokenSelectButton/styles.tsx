import { Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) => ({
  button: {
    padding: '8px 12px',
    margin: 0,
    border: `2px solid ${theme.palette.background.light}`,
    boxShadow: 'none',
    outline: 'none',
    background: '#161a32',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '2px',
    pointerEvents: 'none' as const,
  },
  buttonMore: {
    padding: '8px 6px 8px 12px',
    cursor: 'pointer' as const,
    pointerEvents: 'auto' as const,
  },
  iconAssets: {
    width: '32px',
    height: '32px',
    flexShrink: 0,
    flexGrow: 0,
  },
  iconMore: {
    flexShrink: 0,
    flexGrow: 0,
    fill: '#D0D0DA',
  },
});
