import React from 'react';
import { makeStyles } from '@material-ui/core';

import { styles } from './styles';
import { useTranslation } from 'react-i18next';
import { CheckboxFilter } from '../CheckboxFilter';

const useStyles = makeStyles(styles);
export const CheckboxFilterGroup = () => {
  const classes = useStyles();
  const {t} = useTranslation();
  return (
    <div>
      <div className={classes.checkboxFilter}>
        <CheckboxFilter
          className={classes.checkbox}
          filter="onlyRetired"
          label={t('Filter-AsstSingle')}
        />
        <CheckboxFilter
          className={classes.checkbox}
          filter="onlyPaused"
          label={t('Filter-Paused')}
        />
        <CheckboxFilter
          className={classes.checkbox}
          filter="onlyBoosted"
          label={t('Filter-Boost')}
        />
      </div>
    </div>
  );
};
