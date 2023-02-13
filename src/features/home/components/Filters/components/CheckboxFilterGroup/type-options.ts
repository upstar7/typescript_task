import { FilteredVaultsState } from '../../../../../data/reducers/filtered-vaults';

export const TYPE_OPTIONS: Record<FilteredVaultsState['vaultType'], string> = {
  all: 'Filter-DropdwnDflt',
  single: 'Filter-AsstSingle',
  lps: 'Filter-LPS',
  // stable: 'Filter-Stable',
  // staked: 'Filter-Staked',
  // correlated: 'Filter-Correlated',
  // stakable: 'Filter-Stakable',
};
