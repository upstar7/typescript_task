import { FilteredVaultsState } from '../../../../../data/reducers/filtered-vaults';

export const CATEGORY_OPTIONS: Record<FilteredVaultsState['vaultCategory'], string> = {
  all: 'Filter-CatgryAll',
  featured: 'Filter-Correlated',
  stable: 'Filter-Stable',
  bluechip: 'Filter-CatgryBlue',
  beefy: 'Filter-CatgryBeefy',
};
