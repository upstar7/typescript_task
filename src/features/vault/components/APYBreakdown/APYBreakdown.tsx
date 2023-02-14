import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { formattedTotalApy } from '../../../../helpers/format';
import { Card, CardContent, CardHeader, CardTitle } from '../Card';
import { styles } from './styles';
import shield from './shield.svg';
import { selectVaultTotalApy } from '../../../data/selectors/apy';
import { isGovVault, shouldVaultShowInterest, VaultEntity } from '../../../data/entities/vault';
import { selectVaultById } from '../../../data/selectors/vaults';
import { selectIsVaultBoosted } from '../../../data/selectors/boosts';
import { StatLoader } from '../../../../components/StatLoader';
import { useAppSelector } from '../../../../store';

const useStyles = makeStyles(styles);

function APYBreakdownCardComponent({ vaultId }: { vaultId: VaultEntity['id'] }) {
  const classes = useStyles();
  const { t } = useTranslation();
  const vault = useAppSelector(state => selectVaultById(state, vaultId));
  const values = useAppSelector(state => selectVaultTotalApy(state, vaultId));
  const formatted = formattedTotalApy(values, <StatLoader />);
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
          <CardTitle title={t('Vault-ApyBreakdown')} />
        </div>
      </CardHeader>
      <CardContent>
        {showApy ? (
          <div>
            <div className={classes.apysContainer}>
              <div className={classes.apys}>
                <div className={classes.apy}>
                  <div className={classes.apyLabel}>{t('Vault-ApyTotal')}</div>
                  <div className={classes.apyValue}>
                    {isBoosted ? formatted.boostedTotalApy : formatted.totalApy}
                  </div>
                </div>
                {values.vaultApr && (
                  <div className={classes.apy}>
                    <div className={classes.apyLabel}>{t('Vault-VaultApr')}</div>
                    <div className={classes.apyValue}>{formatted.vaultApr}</div>
                  </div>
                )}
                {values.tradingApr > 0 && (
                  <div className={classes.apy}>
                    <div className={classes.apyLabel}>{t('Vault-AprTrading')}</div>
                    <div className={classes.apyValue}>{formatted.tradingApr}</div>
                  </div>
                )}
                {values.liquidStakingApr > 0 && (
                  <div className={classes.apy}>
                    <div className={classes.apyLabel}>{t('Vault-AprLiquidStaking')}</div>
                    <div className={classes.apyValue}>{formatted.liquidStakingApr}</div>
                  </div>
                )}
                {values.composablePoolApr > 0 && (
                  <div className={classes.apy}>
                    <div className={classes.apyLabel}>{t('Vault-AprComposablePool')}</div>
                    <div className={classes.apyValue}>{formatted.composablePoolApr}</div>
                  </div>
                )}
                {isBoosted && (
                  <div className={classes.apy}>
                    <div className={classes.apyLabel}>{t('Vault-AprBoost')}</div>
                    <div className={classes.apyValue}>{formatted.boostApr}</div>
                  </div>
                )}
              </div>
            </div>
            <hr />
          </div>
        ) : null}
        <div className={classes.audits}>
          {isVaultAudited ? (
            <div className={classes.audit}>
              <img alt="Audited" src={shield} className={classes.auditIcon} />
              <div className={classes.auditLabel}>{t('Vault-Auditd')}</div>
            </div>
          ) : null}
          <div className={classes.audit}>
            <img alt="Community Audited" src={shield} className={classes.auditIcon} />
            <div className={classes.auditLabel}>{t('Vault-AuditdCommunity')}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export const APYBreakdown = React.memo(APYBreakdownCardComponent);
