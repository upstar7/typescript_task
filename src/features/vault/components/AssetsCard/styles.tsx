import { Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) => ({
  title: {
    ...theme.typography.h2,
    color: theme.palette.text.primary,
    
    alignItems: 'center',
  },
  container: {
    backgroundColor: theme.palette.background.default,
    borderRadius: '16px',
    marginTop: 24,
  },
  cards: {
    marginTop: 24,
    display: 'flex',
    flexDirection: 'column' as const,
    rowGap: '16px',
  },
});
