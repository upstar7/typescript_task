import React, { memo } from 'react';
import { Container, makeStyles } from '@material-ui/core';
import { Filters } from './components/Filters';
import { Portfolio } from './components/Portfolio';
import { Loading } from './components/Loading';
import { selectIsVaultListAvailable } from '../data/selectors/data-loader';
import { styles } from './styles';
import { Vaults } from './components/Vaults';
import { useAppSelector } from '../../store';
import { RenBannerHome } from '../../components/Banners/RenBanner';

import { CheckboxFilterGroup } from './components/Filters/components/CheckboxFilterGroup';

const useStyles = makeStyles(styles);

export const Home = memo(function Home() {
  const classes = useStyles();
  const isVaultListAvailable = useAppSelector(selectIsVaultListAvailable);

  if (!isVaultListAvailable) {
    return <Loading />;
  }

  return (
    <>
      <Container maxWidth="lg" className={classes.vaultContainer}>
        <div>
          <RenBannerHome />
          <div className={classes.portfolioContainer}>
            <CheckboxFilterGroup />
            <Portfolio />
          </div>
        </div>
        <Filters />
        <Vaults />
      </Container>
    </>
  );
});
