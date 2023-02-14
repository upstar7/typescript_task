import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChainEntity } from '../entities/chain';
import { PlatformEntity } from '../entities/platform';
import { KeysOfType } from '../utils/types-utils';

/**
 * State containing Vault infos
 */
export type FilteredVaultsState = {
  /**
   * Some form element have local copies of the state as putting it inside the
   * redux store would be too slow for user interactions. This bool tells them
   * to reset their local copy. The search text is (for now) the only example.
   **/
  reseted: boolean;
  sort: 'tvl' | 'apy' | 'daily' | 'safetyScore' | 'default' | 'depositValue' | 'walletValue';
  sortDirection: 'asc' | 'desc';
  onlySingle: boolean;
  onlyLps: boolean;
  onlyStakeable: boolean;
  onlyStaked: boolean;
  onlyCorrelated: boolean;
  onlyStable: boolean;
  searchText: string;
  chainIds: ChainEntity['id'][];
  platformId: PlatformEntity['id'] | null;
};
export type FilteredVaultBooleanKeys = KeysOfType<Omit<FilteredVaultsState, 'reseted'>, boolean>;

const initialFilteredVaultsState: FilteredVaultsState = {
  reseted: true,
  sort: 'default',
  onlySingle: false,
  onlyLps: false,
  onlyStakeable: false,
  onlyStaked: false,
  onlyCorrelated: false,
  onlyStable: false,
  sortDirection: 'desc',
  searchText: '',
  chainIds: [],
  platformId: null,
};

export const filteredVaultsSlice = createSlice({
  name: 'filtered-vaults',
  initialState: initialFilteredVaultsState,
  reducers: {
    reset() {
      return initialFilteredVaultsState;
    },
    setSort(sliceState, action: PayloadAction<FilteredVaultsState['sort']>) {
      sliceState.reseted = false;
      sliceState.sort = action.payload;
    },
    setSortDirection(sliceState, action: PayloadAction<FilteredVaultsState['sortDirection']>) {
      sliceState.reseted = false;
      sliceState.sortDirection = action.payload;
    },
    setSortFieldAndDirection(
      sliceState,
      action: PayloadAction<{
        field: FilteredVaultsState['sort'];
        direction: FilteredVaultsState['sortDirection'];
      }>
    ) {
      sliceState.reseted = false;
      sliceState.sort = action.payload.field;
      sliceState.sortDirection = action.payload.direction;
    },
    setSearchText(sliceState, action: PayloadAction<FilteredVaultsState['searchText']>) {
      sliceState.reseted = false;
      sliceState.searchText = action.payload;
    },
    setChainIds(sliceState, action: PayloadAction<FilteredVaultsState['chainIds']>) {
      sliceState.reseted = false;
      sliceState.chainIds = action.payload;
    },
    setPlatformId(sliceState, action: PayloadAction<FilteredVaultsState['platformId']>) {
      sliceState.reseted = false;
      sliceState.platformId = action.payload;
    },
    // setOnlySingle(sliceState, action: PayloadAction<FilteredVaultsState['onlySingle']>) {
    //   sliceState.reseted = false;
    //   sliceState.onlySingle = action.payload;
    // },
    // setOnlyPaused(sliceState, action: PayloadAction<FilteredVaultsState['onlyPaused']>) {
    //   sliceState.reseted = false;
    //   sliceState.onlyPaused = action.payload;
    // },
    // setOnlyBoosted(sliceState, action: PayloadAction<FilteredVaultsState['onlyBoosted']>) {
    //   sliceState.reseted = false;
    //   sliceState.onlyBoosted = action.payload;
    // },
    setBoolean(
      sliceState,
      action: PayloadAction<{ filter: FilteredVaultBooleanKeys; value: boolean }>
    ) {
      sliceState.reseted = false;
      console.log(action.payload)
      sliceState[action.payload.filter] = action.payload.value;
    },
  },
});

export const filteredVaultsActions = filteredVaultsSlice.actions;
