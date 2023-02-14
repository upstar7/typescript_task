import { makeStyles } from '@material-ui/core';
import { UserStats } from './UserStats';
import { VaultsStats } from './VaultsStats';
import { styles } from './styles';
// import { useTranslation } from 'react-i18next';
// import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
// import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
// import { useTheme } from '@material-ui/core/styles';
// import { selectIsBalanceHidden } from '../../../data/selectors/wallet';
// import { setToggleHideBalance } from '../../../data/reducers/wallet/wallet';
// import { useAppDispatch, useAppSelector } from '../../../../store';

const useStyles = makeStyles(styles);

export const Portfolio = () => {
  const classes = useStyles();
  // const theme = useTheme();
  // const dispatch = useAppDispatch();
  // const hideBalance = useAppSelector(selectIsBalanceHidden);

  // const updateHideBalance = () => {
  //   dispatch(setToggleHideBalance());
  // };


  return (
    <div>
      <div className={classes.platform}>
        <VaultsStats />
        <UserStats />
      </div>
    </div>
  );
};
