import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { styles } from './styles';
import walletLoading from '../../images/bifi-logos/loading-20.svg';

const useStyles = makeStyles(styles);

export const WalletLoader = () => {
  const classes = useStyles();
  return (
    <Box textAlign="center">
      <img alt="BIFI" className={classes.rotateIcon} src={walletLoading} />
    </Box>
  );
};
