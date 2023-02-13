import { useCallback, useState } from 'react';
import { Box, Grid, makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { formatBigUsd } from '../../../../../helpers/format';
import { StatLoader } from '../../../../../components/StatLoader';
import { styles } from './styles';
import { selectTotalTvl } from '../../../../data/selectors/tvl';
import { ModalTvl } from '../ModalTvl';
import { useAppSelector } from '../../../../../store';
import { Modal } from '../../../../../components/Modal';
// import { selectUserGlobalStats } from '../../../../data/selectors/apy';

const useStyles = makeStyles(styles);

export const VaultsStats = () => {
  const [isTvlModalOpen, setIsTvlModalOpen] = useState<boolean>(false);
  const classes = useStyles();
  const { t } = useTranslation();
  const totalTvl = useAppSelector(selectTotalTvl);
  const ValueText = ({ value }) => <>{value ? <span>{value}</span> : <StatLoader />}</>;

  const handleTvlModalOpen = useCallback(() => {
    setIsTvlModalOpen(true);
  }, [setIsTvlModalOpen]);

  const handleTvlModalClose = useCallback(() => {
    setIsTvlModalOpen(false);
  }, [setIsTvlModalOpen]);

  return (
    <Grid container className={classes.userStats}>
      <Box className={classes.stat}>
        <div className={classes.label} onClick={handleTvlModalOpen}>
          {t('Portfolio-TVL')}
          <span>
            <div className={classes.value}>
              <ValueText value={formatBigUsd(totalTvl)} />
            </div>
          </span>
        </div>
      </Box>
      <Modal open={isTvlModalOpen} onClose={handleTvlModalClose}>
        <ModalTvl close={handleTvlModalClose} />
      </Modal>
    </Grid>
  );
};
