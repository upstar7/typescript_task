import React from 'react';
import { makeStyles } from '@material-ui/core';

import { styles } from './styles';
import { useTranslation } from 'react-i18next';
import { CheckboxFilter } from '../CheckboxFilter';

const useStyles = makeStyles(styles);
export const CheckboxFilterGroup = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div>
      <div className={classes.checkboxFilter}>
        <div>
          <CheckboxFilter
            className={classes.checkbox}
            filter="onlySingle"
            label={t('Filter-AsstSingle')}
          />
          <CheckboxFilter
            className={classes.checkbox}
            filter="onlyStable"
            label={t('Filter-Stable')}
          />
          <CheckboxFilter
            className={classes.checkbox}
            filter="onlyCorrelated"
            label={t('Filter-Correlated')}
          />
        </div>
        <div>
          <CheckboxFilter className={classes.checkbox} filter="onlyLps" label={t('Filter-Lps')} />
          <CheckboxFilter
            className={classes.checkbox}
            filter="onlyStaked"
            label={t('Filter-Staked')}
          />
          <CheckboxFilter
            className={classes.checkbox}
            filter="onlyStakeable"
            label={t('Filter-Stakeable')}
          />
        </div>
      </div>
    </div>
  );
};
