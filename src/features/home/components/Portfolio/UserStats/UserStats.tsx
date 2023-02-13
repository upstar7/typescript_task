import { memo } from 'react';
import { makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { formatUsd } from '../../../../../helpers/format';
import { styles } from './styles';
import { useAppSelector } from '../../../../../store';
import { selectUserGlobalStats } from '../../../../data/selectors/apy';
// import { selectIsBalanceHidden } from '../../../../data/selectors/wallet';

const useStyles = makeStyles(styles);

type UserStatProps = {
  label: string;
  value: string;
};
const DepositStat = memo<UserStatProps>(function UserStat({ label, value }) {
  const classes = useStyles();

  return (
    <div className={classes.stat}>
      <div className={classes.depositLabel}>
        {label}
        <span>
          <div className={classes.depositValue}>{value}</div>
        </span>
      </div>
    </div>
  );
});

const DailyStat = memo<UserStatProps>(function UserStat({ label, value }) {
  const classes = useStyles();

  return (
    <div className={classes.stat}>
      <div className={classes.dailyLabel}>
        {label}
        <span>
          <div className={classes.dailyValue}>{value}</div>
        </span>
      </div>
    </div>
  );
});

export const UserStats = memo(function () {
  const stats = useAppSelector(selectUserGlobalStats);
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.userStats}>
      <DepositStat label={t('Portfolio-Deposited')} value={formatUsd(stats.deposited)} />
      <DailyStat label={t('Portfolio-YieldDay')} value={formatUsd(stats.daily)} />
    </div>
  );
});
