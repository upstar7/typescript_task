import React, { ReactNode } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import { styles } from './styles';
import { ContentLoading } from '../ContentLoading';

const useStyles = makeStyles(styles);

export function ValueBlock({
  label,
  value,
  textContent = true,
  tooltip,
  usdValue,
  loading = false,
  blurred = false,
  borderLeft = false,
  borderRight = false,
  divide = false,
}: {
  label: ReactNode;
  value: ReactNode;
  textContent?: boolean;
  tooltip?: { title?: string; content: ReactNode };
  usdValue?: ReactNode;
  loading?: boolean;
  blurred?: boolean;
  borderLeft?: boolean;
  borderRight?: boolean;
  divide?: boolean;

}) {
  const classes = useStyles();
  return (
    <>
      <div
        className={clsx({
          [classes.label]: true,
          [classes.borderLeft]: borderLeft,
          [classes.borderRight]: borderRight,
        })}
      >
        {label}
      </div>
      {textContent ? (
        <div
          className={clsx({
            [classes.value]: true,
            [classes.blurred]: blurred,
            [classes.divide]: divide,
          })}
        >
          {!loading ? <>{blurred ? '....' : value}</> : <ContentLoading />}
        </div>
      ) : !loading ? (
        <div
          className={clsx({
            [classes.value]: true,
            [classes.blurred]: blurred,
            [classes.divide]: divide,
          })}
        >
          {blurred ? '....' : value}
        </div>
      ) : (
        <Box className={classes.noTextContentLoader}>
          <ContentLoading />
        </Box>
      )}

      {usdValue && (
        <div
          className={clsx({
            [classes.price]: true,
            [classes.blurred]: blurred,
          })}
        >
          {!loading ? <>{blurred ? '...' : usdValue}</> : <ContentLoading />}
        </div>
      )}
    </>
  );
}
