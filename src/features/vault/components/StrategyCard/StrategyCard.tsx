import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { formattedTotalApy } from '../../../../helpers/format';
import { LinkButton } from '../../../../components/LinkButton';
import { Card, CardContent, CardHeader, CardTitle } from '../Card';
import { styles } from './styles';
import shield from './shield.svg';
import { StrategyDescription } from './StrategyDescription';
import { selectVaultTotalApy } from '../../../data/selectors/apy';
import { isGovVault, shouldVaultShowInterest, VaultEntity } from '../../../data/entities/vault';
import { selectVaultById, selectVaultStrategyAddress } from '../../../data/selectors/vaults';
import { selectChainById } from '../../../data/selectors/chains';
import { selectIsVaultBoosted } from '../../../data/selectors/boosts';
import { StatLoader } from '../../../../components/StatLoader';
import { useAppSelector } from '../../../../store';

const useStyles = makeStyles(styles);

function StrategyCardComponent({ vaultId }: { vaultId: VaultEntity['id'] }) {
  const classes = useStyles();
  const { t } = useTranslation();
  const vault = useAppSelector(state => selectVaultById(state, vaultId));
  const chain = useAppSelector(state => selectChainById(state, vault.chainId));
  const values = useAppSelector(state => selectVaultTotalApy(state, vaultId));
  const formatted = formattedTotalApy(values, <StatLoader />);
  const stratAddr = useAppSelector(state => selectVaultStrategyAddress(state, vaultId));
  const isBoosted = useAppSelector(state => selectIsVaultBoosted(state, vaultId));
  const isVaultAudited = vault.risks.includes('AUDIT');
  const showApy = shouldVaultShowInterest(vault);

  if (isGovVault(vault)) {
    return <></>;
  }

  return (
    <Card>
      <CardHeader className={classes.header}>
        <div>
          <CardTitle title={t('Vault-Strategy')} />
        </div>
        <div className={classes.cardActions}>
          <div className={classes.cardAction}>
            <LinkButton
              href={`${chain.explorerUrl}/address/${stratAddr}`}
              text={t('Strat-Address')}
            />
          </div>
          <div className={classes.cardAction}>
            <LinkButton
              href={`${chain.explorerUrl}/address/${vault.earnContractAddress}`}
              text={t('Strat-AddressVault')}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className={classes.text}>
          <StrategyDescription vaultId={vaultId} />
        </div>
      </CardContent>
    </Card>
  );
}

export const StrategyCard = React.memo(StrategyCardComponent);
