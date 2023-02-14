import React, { memo } from 'react';
import { makeStyles, useMediaQuery } from '@material-ui/core';
import { ChainButtonFilter, ChainDropdownFilter } from './components/ChainFilters';
// import { CheckboxFilter, CheckboxFilterProps } from './components/CheckboxFilter';

import { styles } from './styles';

import { Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

export const Filters = memo(function Filters() {
  const classes = useStyles();
  const desktopView = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

  return (
    <div className={classes.filters}>
      {desktopView ? (
        <ChainButtonFilter className={classes.chain} />
      ) : (
        <ChainDropdownFilter className={classes.chain} />
      )}
    
    </div>
  );


});
