import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core';
import { styles } from './styles';
import { CheckboxFilter } from '../CheckboxFilter';

const useStyles = makeStyles(styles);

export type ExtendedFiltersProps = {
  desktopView: boolean;
};
export const ExtendedFilters = memo<ExtendedFiltersProps>(function ({ desktopView }) {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <div className={classes.extendedFilters}>
    
    </div>
  );
});
