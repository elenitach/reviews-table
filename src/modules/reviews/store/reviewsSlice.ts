import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Review } from "../api/interfaces";
import {
  FetchStatuses,
  FilterState,
  FilterValues,
  SortState,
  SortTypes,
} from "./interfaces";
import { parseSort } from "../helpers/parseSort";

export interface RewiewsState {
  initialReviews: Review[];
  reviews: Review[];
  sort: string | null;
  filters: Record<string, FilterValues>;
  fetchStatus: FetchStatuses | null;
}

const initialState: RewiewsState = {
  initialReviews: [],
  reviews: [],
  sort: null,
  filters: {},
  fetchStatus: null,
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    fetchReviews: (state) => {
      state.fetchStatus = FetchStatuses.Pending;
    },
    fetchSuccess: (state, { payload }: PayloadAction<Review[]>) => {
      state.fetchStatus = FetchStatuses.Success;
      state.initialReviews = payload;
      state.reviews = payload;
    },
    fetchError: (state) => {
      state.fetchStatus = FetchStatuses.Error;
    },
    sort: (state, { payload }: PayloadAction<string | null>) => {
      state.sort = payload;
      const sort = parseSort(payload);
      if (!sort) {
        state.reviews = state.reviews.sort((a, b) => a.id - b.id);
      } else {
        state.reviews.sort((a, b) => {
          if (sort.type === SortTypes.Asc) {
            return a[sort.field] < b[sort.field] ? -1 : a[sort.field] === b[sort.field] ? 0 : 1;
          }
          return b[sort.field] < a[sort.field]
            ? -1
            : a[sort.field] === b[sort.field]
            ? 0
            : 1;
        });
      }
    },
    filter: (state, {}: PayloadAction<FilterState>) => {},
  },
});

export const { sort, filter, fetchReviews, fetchError, fetchSuccess } =
  reviewsSlice.actions;

export default reviewsSlice.reducer;
